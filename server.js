const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const secret = process.env.SESSION_SECRET ||'local_secret';
app.use(cookieParser());
app.use(session({ secret: secret}));


app.use(passport.initialize());

app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist/xuanproject')));

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

const port = process.env.PORT || '3200';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);

require('./assignment/app.js')(app);

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/xuanproject/index.html'));
});

server.listen( port , () => console.log('Running on port 3200'));

 // const connectionString = 'mongodb://127.0.0.1:27017/webdev';
const connectionString = 'mongodb://heroku_mmr70hqz:2h26fhtl11sn1q90cse1rfusc8@ds237196.mlab.com:37196/heroku_mmr70hqz';
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const client = mongoose.connect( connectionString, { useNewUrlParser: true });



