const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.render('routes/clients/clients.hbs');
});

module.exports = router;