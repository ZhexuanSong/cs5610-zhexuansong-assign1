module.exports = function () {
  var mongoose = require("mongoose");

  var WidgetSchema = mongoose.Schema({
    _page: {type: mongoose.Schema.ObjectId, ref: "Page"},
    widgetType: {type: String, enum: ['Heading', 'Image', 'Youtube', 'Html', 'Text']},
    name: {type: String},
    text: String,
    placeholder: String,
    description: String,
    url: String,
    width: String,
    height: Number,
    rows: Number,
    size: Number,
    class: String,
    icon: String,
    formatted: Boolean,
    position: Number,
    dateCreated: {type: Date, default: Date.now}
  }, {collection: "assignment.widget"});

  return WidgetSchema;
};
