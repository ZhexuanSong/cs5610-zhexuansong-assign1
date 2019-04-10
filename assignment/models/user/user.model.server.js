var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');

var userModel = mongoose.model('User', userSchema);


userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findByCredential = findByCredential;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;

userModel.updateUserWebsites = updateUserWebsites;
userModel.createUserWebsites = createUserWebsites;
userModel.deleteUserWebsites = deleteUserWebsites;
userModel.findUserByFacebookId = findUserByFacebookId;

module.exports = userModel;

function findUserByFacebookId(facebookId) {
  return userModel.findOne({'facebook.id': facebookId});
}

function createUser(user) {
  return userModel.create(user);
}

function findUserById(id) {
 return userModel.findById(id);
}

function findUserByUsername(username) {
  return userModel.findOne({username: username});
}

function findByCredential(username, password) {
  return userModel.findOne({username: username, password: password});
}

function updateUser(userId, user) {
  return userModel.findOneAndUpdate({_id: userId},user,{new: true});
}

function deleteUser(userId) {
  return userModel.findByIdAndRemove(userId);
}

function createUserWebsites(userId, website) {
  return userModel.findByIdAndUpdate(userId,
    {$push: {"websites": website}},
    {safe: true, upsert: true},
    (err) => {
    }
    );
}

function updateUserWebsites(userId, website) {
  return userModel.findUserById(userId)
    .then((user) => {
      const index = findIndex(user.websites, website);
      user.websites.splice(index,1);
      user.websites.splice(index,0,website);
      return user.save();
    });
}


function findIndex(array, target) {
  for (let i = 0;i<array.length;i++) {
    if (array[i]._id.toString() === target._id.toString()) {
      return i;
    }
  }
  return -1;
}


function deleteUserWebsites(userId, websiteId) {
  return userModel.findByIdAndUpdate(userId,
    {$pull: {'websites': {_id: websiteId}}},
    {safe: true, new: true},
    (err) => {
    }
    );
}
