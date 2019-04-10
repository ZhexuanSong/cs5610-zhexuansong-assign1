var express = require('express');
var mongoose = require('mongoose');
// var connectionString ='mongodb://127.0.0.1:27017/webdev';
var connectionString = 'mongodb://zhexuan:zhexuan666@ds011369.mlab.com:11369/heroku_czb6m9vc';
mongoose.connect(connectionString);

const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const http = require('http');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

app.use(session({
  secret: 'this is the secret',
  resave: true,
  saveUninitialized: true
}));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src/assets')));

//CORS
app.use(function(reg, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
  next();
});


const port=process.env.PORT || '3100';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);


require("./assignment/app.js")(app);

// For Build: Catch all other routes and return the index file -- BUILDINg
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


server.listen( port , function() {
  console.log('Node app is running on port', app.get('port'))});
