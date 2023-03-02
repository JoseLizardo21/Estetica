const {Router} = require('express');
const pool = require('../database');
const {isLoggedIn, isNotLogedIn} = require('../lib/auth');
const router = Router();

router.get('/allWorkers', async(req, res)=>{
    const users = await pool.query("select * from datostrabajador");
    res.render('routes/workers', {users});
});
//Muestra el formulario para la creación de usuarios, solo podrá ingresar el usuario SUPER ADMIN
router.get('/createUsers', isLoggedIn, (req, res)=>{
    console.log(req.user)
    if(req.user.id_tipo_Trabajador === 1 || req.user.id_tipo_Trabajador === 2){
        req.flash("addWorker", "Nuevo Trabajador");
        res.redirect("/workers/allWorkers");
    }else{
        res.redirect('/home');
    }
});
module.exports = router;