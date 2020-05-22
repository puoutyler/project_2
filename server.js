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

// Controllers
app.use('/abovepar', scoreController)

//___________________
// Routes
//___________________



//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));


