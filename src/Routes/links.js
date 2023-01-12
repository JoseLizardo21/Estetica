const {Router} = require('express');
const {isLoggedIn, isNotLogedIn} = require('../lib/auth')
const router = Router();


//muestra el formulario para el inicio de sesión
router.get('/', isNotLogedIn,(req, res)=>{
    res.render('auth/signIn.hbs');
});

module.exports = router;