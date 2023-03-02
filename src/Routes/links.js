const {Router} = require('express');
const {isLoggedIn, isNotLogedIn} = require('../lib/auth');
const { route } = require('./services');
const router = Router();


//muestra el formulario para el inicio de sesión
router.get('/', isNotLogedIn,(req, res)=>{
    res.render('auth/signIn.hbs');
});

router.use('/stock', require('./stock'));
router.use('/billing', require('./billing'));
router.use('/workers', require('./workers'));
router.use('/services', require('./services'));
router.use('/clients', require('./clients'));
router.use('/pointOfSale', require('./pointOfSale'));

module.exports = router;