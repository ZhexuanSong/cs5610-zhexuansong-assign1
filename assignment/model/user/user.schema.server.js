
var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  websites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Website'
  }],
  dateCreated: {
    type: Date,
    default: Date.now
  },
  facebook: {
    id: String,
    token: String,
  }
}, { collection: 'user' });

module.exports = UserSchema;
