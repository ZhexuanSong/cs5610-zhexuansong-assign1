var mongoose = require('mongoose');
var pageSchema = require('../page/page.schema.server');

var websiteSchema = new mongoose.Schema({
        developerId: {type: mongoose.Schema.ObjectId, ref: "User"},
        name: String,
        description: String,
        pages: [pageSchema],
        dateCreated: {type:Date, default: Date.now()}
    },
    {collection:'Websites'}
);

module.exports = websiteSchema;
