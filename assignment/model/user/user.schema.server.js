let mongoose = require('mongoose');
let websiteSchema = require('../website/website.schema.server');

let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    dateCreated: {type: Date, default: Date.now()},
    websites: [websiteSchema],
    facebook: { id: String,  token: String }
},{collection:'Users'});

module.exports = userSchema;
