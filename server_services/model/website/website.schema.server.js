var mongoose = require('mongoose');
var pageSchema = require('../page/page.schema.server');
var websiteSchema = new mongoose.Schema({
  name: String,
  description: String,
  developerId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  pages: [pageSchema],
  dateCreated: {type: Date, default:Date.now()}
}, {collection: 'Websites'});

module.exports = websiteSchema;
