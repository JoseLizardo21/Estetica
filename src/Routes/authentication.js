const {Router} = require('express');
const passport = require('passport');
const pool = require('../database');
const {isLoggedIn, isNotLogedIn} = require('../lib/auth');
const {encrypPassword} = require('../lib/helpers')
const router = Router();
const {verifyPassword} = require('../lib/algorithms/verifyPassword.js')



//Esta es la ruta para crear un nuevo usuario
router.post('/createUsers',isLoggedIn ,async(req, res)=>{
    const {nombres, apellidos, password, email, id_documento, documento, id_tipo_Trabajador, fecha_nacimiento, direccion} = req.body;
    const newUser = {
        nombres,
        apellidos,
        email,
        password,
        id_documento,
        documento,
        id_tipo_Trabajador,
        fecha_nacimiento,
        id_estado: 1, 
        direccion
    }
    //Aquí si es una contraseña valida
    const value = verifyPassword(req, newUser.password);
    if(value){
        const row = await pool.query("SELECT * FROM trabajador WHERE documento = ?", [documento]);
        if(row.length == 0){
            newUser.password = await encrypPassword(password);
            await pool.query('INSERT INTO trabajador set ?', [newUser]);
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