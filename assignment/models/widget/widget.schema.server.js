const mongoose = require("mongoose");

const WidgetSchema = mongoose.Schema({
  _pageId: {type: mongoose.Schema.ObjectId, ref: 'PageModel'},
  type: {type: String, enum: ['HEADER', 'IMAGE', 'YOUTUBE', 'HTML', 'TEXT']},
  name: {type: String},
  text: String,
  placeholder: String,
  description: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: Number,
  class: String,
  icon: String,
  deletable: Boolean,
  formatted: Boolean,
  position: Number, //for sortable
  dateCreated: {type: Date, default: Date.now} //Date.now is the current time
}, {collection: "widget"});

module.exports = WidgetSchema;

