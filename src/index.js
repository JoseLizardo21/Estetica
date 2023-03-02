const express = require("express");
const path = require('path');
const {engine} = require('express-handlebars');
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const passport = require('passport');

const {database} = require('./keys')

//initializations
const app = express();
require('./lib/passport')
//settings
app.set('port', process.env.PORT||3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars.js')
}));
app.set('view engine', '.hbs');

//midlewars
app.use(session({
    secret: 'akaakka',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database),
}))
app.use(flash());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

//Global variables 
app.use((req,res,next)=>{
    app.locals.message = req.flash('message');
    app.locals.forms = req.flash('forms');
    app.locals.increaseProduct = req.flash('increaseProduct');
    app.locals.decreaseProduct = req.flash('decreaseProduct');
    app.locals.addServices = req.flash('addServices');
    app.locals.addFamily = req.flash('addFamily');
    app.locals.addWorker = req.flash('addWorker');
    app.locals.user = req.user;
    next();
});

//Routes
app.use(require('./Routes/authentication'));
app.use(require('./Routes/links'));

//Public
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});
