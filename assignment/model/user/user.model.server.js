let mongoose = require('mongoose');
let userSchema = require('./user.schema.server');

let userModel = mongoose.model("User",userSchema);


userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUserName = findUserByUserName;
userModel.findByCredential = findByCredential;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;
userModel.findUserByFacebookId = findUserByFacebookId;

module.exports = userModel;

  function findUserByFacebookId(facebookId) {
    return userModel.findOne({'facebook.id': facebookId});
}

function createUser(user) {
    console.log("model"+user);
    return userModel.create(user);
}

function findUserById(id) {
    return userModel.findById(id);
}

function findUserByUserName(username) {
    return userModel.findOne({username:username});
}

function findByCredential(username,password){
    return userModel.findOne({username:username,password:password});
}

function updateUser(userId,user) {
    console.log('user model update: ' + user);
    delete user._id;
    return userModel.findOneAndUpdate(userId,user);
}

function deleteUser(userId){
    return userModel.findOneAndRemove(userId).then(function (user) {
        console.log('user model delete: ' + user);
        return user;
    });
}
