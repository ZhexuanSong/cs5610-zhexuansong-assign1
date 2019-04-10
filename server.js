const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

const passport      = require('passport');
const cookieParser  = require('cookie-parser');
const session       = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// const secret = process.env.SECRET || "this is the secret";

// const secret = process.env.SECRET || "this is the secret";
const secret = !!process.env.SESSION_SECRET ? process.env.SESSION_SECRET : 'local_secret'
app.use(cookieParser());
app.use(session({ secret: secret }));


app.use(passport.initialize());
app.use(passport.session());


// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist/my-project')));
app.use(express.static(path.join(__dirname, 'src/assets')));

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
  res.sendFile(path.join(__dirname, 'dist/my-project/index.html'));
});

server.listen( port , () => console.log('Running on port 3200'));


