var mongoose = require('mongoose');
var websiteSchema = require('../website/website.schema.server');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    websites: [websiteSchema],
    dateCreated: {type:Date, default: Date.now()},
    facebook: {id: String, token: String}
    },
    {collection:'Users'}
);

module.exports = userSchema;
