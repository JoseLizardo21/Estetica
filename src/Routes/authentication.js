const {Router} = require('express');
const passport = require('passport');
const pool = require('../database');
const {isLoggedIn, isNotLogedIn} = require('../lib/auth');
const {encrypPassword} = require('../lib/helpers')
const router = Router();
const {verifyPassword} = require('../lib/algorithms/verifyPassword.js')

//Muestra el formulario para la creación de usuarios, solo podrá ingresar el usuario SUPER ADMIN
router.get('/createUsers', isLoggedIn,(req, res)=>{
    if(req.user.username === "Admin"){
        res.render('auth/createAccount.hbs');
    }else{
        res.redirect('/home');
    }
});

//Esta es la ruta para crear un nuevo usuario
router.post('/createUsers',isLoggedIn ,async(req, res)=>{
    const {username, email, password, typeUser, dni} = req.body;
    const newUser = {
        username,
        email,
        password,
        typeUser,
        dni
    }
    //Aquí si es una contraseña valida
    const value = verifyPassword(req, newUser.password);
    if(value){
        const row = await pool.query("SELECT * FROM users WHERE dni = ?", [dni]);
        if(row.length == 0){
            newUser.password = await encrypPassword(password);
            await pool.query('INSERT INTO users set ?', [newUser]);
            req.flash("message","Usuario creado correctamente");
            res.redirect('/home');
        }else{
            req.flash("message", "El usuario ya ha sido registrado anteriormente");
            res.redirect('/createUsers');
        }
    }else{
        res.redirect('/createUsers');
    }
});

router.post('/signin', isNotLogedIn, (req, res, next)=>{
    passport.authenticate('local.signin', {
        successRedirect: '/home',
        failureRedirect: '/',
    })(req, res, next);
});

router.get('/home', isLoggedIn,(req, res)=>{
    const {id, username, email, typeUser} = req.user;
    const user = {
        id,
        username,
        typeUser,
        email
    }
    res.render('routes/home.hbs', {user});
});

router.get('/logout', isLoggedIn, function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
});

module.exports = router;