const {Router} = require('express');
const pool = require('../database');
const {isLoggedIn, isNotLogedIn} = require('../lib/auth');
const router = Router();

router.get('/allWorkers', async(req, res)=>{
    const users = await pool.query("SELECT * FROM users");
    res.render('routes/workers', {users});
});
//Muestra el formulario para la creación de usuarios, solo podrá ingresar el usuario SUPER ADMIN
router.get('/createUsers', isLoggedIn, (req, res)=>{
    if(req.user.username === "Admin"){
        res.render('auth/createAccount.hbs');
    }else{
        res.redirect('/home');
    }
});
module.exports = router;