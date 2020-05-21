//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const scoreController = require('./controllers/abovepar.js')
require('dotenv').config()
const app = express ();
const db = mongoose.connection;
const Score = require('./models/abovepar.js')

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

// Controllers
app.use('/abovepar', scoreController)

//___________________
//Middleware
//___________________
app.use(express.static('public'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

//___________________
// Routes
//___________________



//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));


