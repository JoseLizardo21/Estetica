const {Router} = require('express');
const {v4: uuid} = require('uuid');
const multer = require('multer');
const pool = require("../database");

const router = Router();

router.get('/', async(req, res)=>{
    const families = await pool.query("SELECT * FROM Families");
    res.render('routes/services/services.hbs', {families});
});

router.get('/addFamily', (req, res)=>{
    req.flash('addFamily', "h");
    res.redirect('/services');
});

router.post('/addFamily', async (req,res)=>{
    const {familyName} = req.body;
    const newFamily = {
        familyName
    } 
    await pool.query("INSERT INTO Families set ?", [newFamily]);
    res.redirect("./");
});

router.use(require('./image.services'));

router.get('/addServices', async(req, res)=>{
    const row = await pool.query("SELECT * FROM families");
    req.flash('addServices', row);
    res.redirect('./');
});


module.exports = router