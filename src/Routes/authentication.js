const {Router} = require('express');
const passport = require('passport');
const pool = require('../database');
const {isLoggedIn, isNotLogedIn} = require('../lib/auth');
const {encrypPassword} = require('../lib/helpers')
const router = Router();

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
    
    newUser.password = await encrypPassword(password);
    await pool.query('INSERT INTO users set ?', [newUser]);
    res.redirect('/home');
});

router.post('/signin', isNotLogedIn, (req, res, next)=>{
    passport.authenticate('local.signin', {
        successRedirect: '/home',
        failureRedirect: '/',
    })(req, res, next);
});

router.get('/home', isLoggedIn,(req, res)=>{
    res.render('routes/home.hbs');
});

router.get('/logout', isLoggedIn, function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
});

module.exports = router;