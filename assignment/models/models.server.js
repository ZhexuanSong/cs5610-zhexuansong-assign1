const mongoose = require('mongoose');
// const db = mongoose.connect('mongodb://localhost:27017/webdevDB');
// this is heroku db connection
const db = mongoose.connect('mongodb://heroku_mmr70hqz:2h26fhtl11sn1q90cse1rfusc8@ds237196.mlab.com:37196/heroku_mmr70hqz'');


module.exports = db;
