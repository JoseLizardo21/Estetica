const {Router} = require('express');
const pool = require('../database');
const router = Router();

router.get('/allWorkers', async(req, res)=>{
    const users = await pool.query("SELECT * FROM users");
    console.log(users)
    res.render('routes/workers', {users});
});

module.exports = router;