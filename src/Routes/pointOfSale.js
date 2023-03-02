const {Router} = require("express");
const pool = require("../database");

const router = Router();

router.get('/', async(req, res)=>{
    const families = await pool.query("SELECT * FROM families");
    const services = await pool.query("SELECT * FROM services");
    const stock = await pool.query("SELECT * FROM stock");
    services.forEach(e => {
        families.forEach(el =>{
            if(e.idFamily == el.id){
                e.family = el.familyName
            }
        });
    });
    res.render("routes/pointOfSale.hbs", {families, services, stock});
});

module.exports = router;