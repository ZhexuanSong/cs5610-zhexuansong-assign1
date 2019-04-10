const mongoose = require('mongoose');
// const db = mongoose.connect('mongodb://localhost:27017/webdevDB');
// this is heroku db connection
const db = mongoose.connect('mongodb://cs5610:123456@ds263707.mlab.com:63707/heroku_mwrl8mdn');


module.exports = db;
