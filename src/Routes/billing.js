const {Router} = require("express");

const router = Router();

//esta ruta es para mostrar las opciones de factura o boleta
router.get('/', (req, res)=>{
    res.render('routes/billing/billing.hbs');
});

router.get('/electronicBill', (req, res)=>{
    res.render('routes/billing/electronicBill.hbs');
});

module.exports = router;