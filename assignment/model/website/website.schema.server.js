let mongoose = require('mongoose');
let pageSchema = require('../page/page.schema.server');

let websiteSchema = mongoose.Schema({
        _user: {type: mongoose.Schema.ObjectId, ref: "User"},
        name: String,
        description: String,
        pages: [pageSchema],
        dateCreate:{type: Date, default: Date.now()}
    },{collection: "Websites"}
);

module.exports = websiteSchema;
