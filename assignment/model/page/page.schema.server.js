let mongoose = require('mongoose');
let widgetSchema = require('../widget/widget.schema.server');

let pageSchema = mongoose.Schema({
        _website: {type: mongoose.Schema.ObjectId, ref: "Website"},
        name: String,
        title: String,
        description: String,
        widgets: [widgetSchema],
        dateCreate:{type: Date, default: Date.now()}
    },{collection: "Pages"}
);

module.exports = pageSchema;
