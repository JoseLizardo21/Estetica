const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('../database');
const helpers = require('./helpers');

passport.use('local.signin', new LocalStrategy({
    usernameFiedl: 'email',
    passwordField: 'password',
    passReqToCallback: false
}, async(email, password, done)=>{
    console.log(email)
    const rows = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if(rows.length > 0){
        const user = rows[0];
        const valuePassword = await helpers.matchPassword(password, user.password);
        if(valuePassword){
            done(null, user);
        }else{
            done(null, false);
        }
    }else {
        return done(null, false);
    }
}));

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser(async(id, done)=>{
    const rows = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    done(null, rows[0]);
});