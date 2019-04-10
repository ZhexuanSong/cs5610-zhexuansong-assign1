var mongoose = require('mongoose');
var widgetSchema = require('../widget/widget.schema.server')

var pageSchema = new mongoose.Schema({
  websiteId: {type: mongoose.Schema.Types.ObjectId, ref: "Website"},
  name: String,
  title: String,
  description: String,
  widgets: [widgetSchema],
  dateCreate:{type: Date, default: Date.now()}
},{collection: 'Pages'});

module.exports = pageSchema;
