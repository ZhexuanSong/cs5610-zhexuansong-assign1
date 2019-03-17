// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist/my-project')));

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    // express will pass the header settings to all
    next();
});

// environment setting
var env = process.env.NODE_ENV || 'development';
app.set('env', env);
var config = require('./env.json')[env];
console.log(config.BASE_URL);
app.set('baseUrl', config.BASE_URL);

// Port setting
const port = process.env.PORT || '8070';
app.set('port', port);

// test the /api/test url
require('./test')(app);


// import all the server files needed
require('./server/app')(app);


// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/my-project/index.html'));
});


// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port 8070'));

/*var dbServer = require('./test-mongodb/app');
//require('./test-mongodb/app')(app);
dbServer(app);*/
