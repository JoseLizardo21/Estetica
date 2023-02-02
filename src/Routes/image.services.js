const {Router} = require('express');
const {v4: uuid} = require('uuid');
const path = require('path');
const multer = require('multer');
const {isLoggedIn, isNotLogedIn} = require('../lib/auth');
const pool = require('../database');

const router = Router();

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename: async(req, file, cb) =>{
/*         console.log(req.body)
        const {serviceName, price, familyName} = req.body;
        const rowsFamilies = await pool.query('SELECT * FROM Families WHERE familyName = ?', [familyName]);
        const idFamily = rowsFamilies[0] */
        const nameImg = uuid() + path.extname(file.originalname).toLocaleUpperCase();
        req.nameImageService = nameImg;
/*         const newService = {
            serviceName,
            price,
            idFamily
        }
        await pool.query('INSERT INTO Services set ?', [newService]); */
        cb(null, nameImg);
    }
});
const uploadImage = multer({
    storage,
    limits: {fileSize: 50000000},
    fileFilter: (req, file, cb)=>{
        const filetype = /jpeg|png|jpg|jfif/;
        const minetype = filetype.test(file.mimetype);
        const extname = filetype.test(path.extname(file.originalname));
        if(minetype && extname){
            return cb(null, true);
        }
        cb("error: el archivo debe de ser valido");
    }
}).single("img");

router.post('/addServices', async(req, res)=>{
    uploadImage(req, res, async(err)=>{
        if(err){
            err.message = "El archivo es muy pesado"
            return res.send(err);
        };
        const {serviceName, price, idFamily} = req.body;
        const newService = {
            serviceName,
            price,
            idFamily,
            imgName: req.nameImageService
        }
        await pool.query("INSERT INTO services  set ?", [newService]);
        res.send("Se ha subido correctamente");
    });
});

module.exports = router;