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
    next();
});

const port = process.env.PORT || '8070';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port 8070'));

/*var dbServer = require('./test-mongodb/app');
dbServer(app);*/

//require('./test-mongodb/app')(app);


// For Build: Catch all other routes and return the index file -- BUILDING
//
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'dist/my-project/index.html'));
// });




// require('./assignment/app')(app);
