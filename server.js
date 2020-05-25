//___________________
//Dependencies
//___________________
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const show = console.log
const Score = require('./models/abovepar.js')
const methodOverride = require('method-override');
const scoreController = require('./controllers/abovepar.js')
require('dotenv').config()
const userController = require('./controllers/users_controller.js')
const session = require('express-session');
const User = require('./models/users.js');
const bcrypt = require('bcrypt');

//___________________
//Port
//___________________
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project2';

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true });

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on('open' , ()=>{});

//___________________
//Middleware
//___________________
app.use(express.static('public'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

// Controllers
app.use('/abovepar', scoreController)
app.use('/user', userController)

const isAuthenticated = (req, res, next) => {
    if(req.session.currentUser) {
        return next()
    }else {
        res.redirect('/session/new')
    }
}

//___________________
// Routes
//___________________

//LOGIN PAGE
app.get('/sessions/new', (req, res) => {
    res.render('sessions/New', {
        currentUser: req.session.currentUser
    })
})

//AUTHENTICATION ROUTE
app.post('/sessions/', (req, res) => {
    User.findOne({username: req.body.username}, (err, foundUser) => {
        if(err){
            res.send(err)
        } else if (!foundUser) {
            res.redirect('/user/new')
        } else {
            if(bcrypt.compareSync(req.body.password, foundUser.password)){
                req.session.currentUser = foundUser.username
                res.redirect('/abovepar/tracker')
                show(foundUser.username)
            } else {
                res.send('Wrong password')
            }
        }
    })
})

//LOGOUT
app.delete('/sessions/', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/sessions/new')
    })
})

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));


