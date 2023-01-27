const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.render('routes/services/services.hbs');
});

module.exports = router;