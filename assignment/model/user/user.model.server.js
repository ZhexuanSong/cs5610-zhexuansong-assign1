var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server.js');
var User = mongoose.model('User', UserSchema);
// mongoose.set('useFindAndModify', false);

User.createUser = createUser;
User.findUserById = findUserById;
User.findUserByUsername = findUserByUsername;
User.findUserByCredentials = findUserByCredentials;
User.updateUser = updateUser;
User.deleteUser = deleteUser;
User.findUserByFacebookId = findUserByFacebookId;

module.exports = User;

function findUserByFacebookId(facebookId) {
  return User.findOne({'facebook.id': facebookId});
}

function createUser(user) {
  return User.create(user);
}

function findUserById(userId) {
  return User.findById(userId);
}

function findUserByUsername(username) {
  return User.findOne({ username: username });
}

function findUserByCredentials(username, password) {
  return User.findOne({ username: username, password: password });
}

function updateUser(userId, user) {
  return User.findByIdAndUpdate(userId, user, {new: true});
}

function deleteUser(userId) {
  return User.findByIdAndRemove(userId);
}
