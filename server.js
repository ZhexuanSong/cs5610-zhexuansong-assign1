const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// process.env.SESSION_SECRET

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist/my-project')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET || 'webdev5610'
}));

var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || '3200';
app.set('port', port);

// var connectionString = 'mongodb://127.0.0.1:27017/webdev';
var connectionString = 'mongodb://heroku_mmr70hqz:2h26fhtl11sn1q90cse1rfusc8@ds237196.mlab.com:37196/heroku_mmr70hqz';

mongoose.Promise = global.Promise;
const client = mongoose.connect( connectionString, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
require('./assignment/app')(app);
// Create HTTP server
const server = http.createServer(app);
server.listen( port, () => console.log('Running on port', app.get('port')));

//require('./assignment/app')(app);
