const {Router} = require('express');
const pool = require('../database');
const {isLoggedIn, isNotLogedIn} = require('../lib/auth')
const moment = require('moment');

const router = Router();
moment.locale('es'); 

router.get('/', async(req, res)=>{
    const products = await pool.query("SELECT * FROM stock");
    res.render('routes/stock1', {products});
});
router.get('/stock2', async(req, res)=>{
    const products = await pool.query("SELECT * FROM stockmovements");
    if(products.length > 0){
        products.forEach(element => {
            element.create_at = moment(element.create_at).format('lll');
        });
    }
    res.render('routes/stock2', {products});
});

router.get('/addProduct', isLoggedIn,(req,res)=>{
    req.flash('forms', "h");
    res.redirect('/stock');
})
router.post('/addProduct', async(req,res)=>{
    const {productName, cantidad, cantMin} = req.body;
    const newRow = {
        productName,
        currentStock: cantidad,
        minimumStock: cantMin
    }
    const rowRes = await pool.query("INSERT INTO stock SET ?", [newRow]);
    const movements = {
        idMovement: rowRes.insertId,
        author: req.user.username,
        product: productName,
        nameMovement: "Agregado",
        cantidad
    }
    await pool.query("INSERT INTO stockmovements SET ?", [movements]);
    res.redirect("/stock");
});

router.get('/increaseProduct/:id', (req, res)=>{
    const id = req.params.id;
    req.flash("increaseProduct", id);
    res.redirect("/stock");
});
router.post('/increaseProduct/:id', async(req, res)=>{
    const {cantIncrease} = req.body;
    const id = req.params.id;
    const row = await pool.query("SELECT * FROM stock Where id = ?", [id]);
    let currentStock = parseInt(row[0].currentStock);
    currentStock += parseInt(req.body.cantIncrease);
    const row2 = await pool.query("UPDATE stock SET currentStock = ? WHERE id = ?", [currentStock, id]);
    const movements = {
        idMovement: id,
        author: req.user.username,
        product: row[0].productName,
        nameMovement: "Aumento",
        cantidad: cantIncrease
    }
    await pool.query("INSERT INTO stockmovements SET ?", [movements]);
    res.redirect("/stock");
});

router.get('/decreaseProduct/:id', async(req, res)=>{
    const id = req.params.id;
    req.flash("decreaseProduct", id);
    res.redirect("/stock");
});
router.post('/decreaseProduct/:id', async(req, res)=>{
    const {cantDecrease} = req.body;
    const id = req.params.id;
    const row = await pool.query("SELECT * FROM stock Where id = ?", [id]);
    let currentStock = parseInt(row[0].currentStock);
    currentStock -= parseInt(cantDecrease);
    await pool.query("UPDATE stock SET currentStock = ? WHERE id = ?", [currentStock, id]);
    const movements = {
        idMovement: id,
        author: req.user.username,
        product: row[0].productName,
        nameMovement: "Disminuido",
        cantidad: cantDecrease
    }
    await pool.query("INSERT INTO stockmovements SET ?", [movements]);
    res.redirect("/stock");
});


router.get('/deleteProduct/:id',async(req, res)=>{
    const id = req.params.id;
    const row = await pool.query("SELECT * FROM stock Where id = ?", [id]);
    await pool.query("DELETE FROM stock WHERE id = ?", [id]);
    const movements = {
        idMovement: id,
        author: req.user.username,
        product: row[0].productName,
        nameMovement: "Quitado",
        cantidad: 0
    }
    await pool.query("INSERT INTO stockmovements SET ?", [movements]);
    res.redirect('/stock');
});



module.exports = router