var mongoose =  require('mongoose');
var userSchema = require('./user.schema.server');

var userModel = mongoose.model('User', userSchema);
// var websiteModel = require('../website/website.model.server');

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;
userModel.findUserByFacebookId = findUserByFacebookId;

function createUser(user) {
    return userModel.create(user);
}

function findUserById(userId) {
    return userModel.findById(userId);
}

function findUserByFacebookId(facebookId) {
    return userModel.findOne({'facebook.id': facebookId});
}

function findUserByUsername(username) {
    return userModel.findOne({username:username});
}

function findUserByCredentials(username, password) {
    return userModel.findOne({username: username, password: password});
}

function updateUser(userId,user) {
    return userModel.findByIdAndUpdate(userId,user,{new: true, safe: true});
}

function deleteUser(userId){
    return userModel.findByIdAndRemove(userId);
}

module.exports = userModel;
