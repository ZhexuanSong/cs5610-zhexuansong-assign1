var mongoose = require('mongoose');
var widgetSchema = new mongoose.Schema({
        pageId: {type: mongoose.Schema.ObjectId, ref: "Page"},
        name: String,
        type: {type: String, enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT','TEXT']},
        text: String,
        placeholder: String,
        url: String,
        width: String,
        height: String,
        rows: Number,
        size: Number,
        class: String,
        icon: String,
        deletable: Boolean,
        formatted: Boolean,
        dateCreated: {type:Date, default: Date.now()}
    },
    {collection:'Widgets'}
);

module.exports = widgetSchema;
