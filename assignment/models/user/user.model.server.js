const mongoose = require("mongoose");
const UserSchema = require("./user.schema.server");
const UserModel = mongoose.model("UserModel", UserSchema);

UserModel.findUserById = findUserById;
UserModel.createUser = createUser;
UserModel.findAllUsers = findAllUsers;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUserByUserName = findUserByUserName;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;

module.exports = UserModel;

function createUser(user){
  return UserModel.create(user);
}

function findUserById(userId){
  return UserModel.findById({_id: userId});
}

function findUserByUserName(username){
  return UserModel.findOne({username: username});
}

function findUserByCredentials(username, password){
  return UserModel.findOne({username: username, password: password});
}

function findAllUsers(){
  UserModel.find(function (err, doc) {
    console.log(doc);
  })
}

function updateUser(userId, user){
  return UserModel.update({_id: userId}, user);
}

function deleteUser(userId) {
  return UserModel.remove({_id: userId});
}
