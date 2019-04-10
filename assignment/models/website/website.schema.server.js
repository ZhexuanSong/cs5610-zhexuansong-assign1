const mongoose = require("mongoose");

const WebsiteSchema = mongoose.Schema({
  _userId: {type: mongoose.Schema.ObjectId, ref: 'UserModel'},
  name: {type: String, required: true},
  description: String,
  pages: [{type: mongoose.Schema.Types.ObjectId, ref: 'PageModel'}],
  dateCreated: {type: Date, default: Date.now} //Date.now is the current time
}, {collection: "website"});

module.exports = WebsiteSchema;
