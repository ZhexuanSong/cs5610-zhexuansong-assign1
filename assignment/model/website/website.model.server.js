let mongoose = require('mongoose');
let websiteSchema = require('./website.schema.server');

let websiteModel = mongoose.model("Website",websiteSchema);
let userModel = require('../user/user.model.server');


websiteModel.createWebsite = createWebsite;
websiteModel.findAllWebsiteForUser = findAllWebsiteForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;

module.exports = websiteModel;

function createWebsite(userId, website) {
    website._user = userId;
    return websiteModel.create(website)
        .then(
            function (website) {
                userModel.findUserById(userId)
                    .then(
                        function (user) {
                            user.websites.push(website);
                            userModel.updateUser(userId,user);
                            user.save();
                            website.save();
                        }
                    );
                return website;
            }
        )
}

function findAllWebsiteForUser(userId) {
    return websiteModel.find({_user:userId.toString()});
}

function findWebsiteById(id) {
    return websiteModel.findById(id);
}

function updateWebsite(id,website) {
    return websiteModel.findByIdAndUpdate(id,website);
}

function deleteWebsite(id){
    return websiteModel.findByIdAndRemove(id);
}
