var mongoose = require('mongoose');

var websiteSchema = require('./website.schema.server');
var websiteModel = mongoose.model("Website",websiteSchema);

var userModel = require('../user/user.model.server');

websiteModel.createWebsite = createWebsite;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.findWebsitesByUser = findWebsitesByUser;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;


function createWebsite(website) {
    return websiteModel.create(website)
        .then(
            function(responseWeb) {
                return userModel.findUserById(website.developerId)
                    .then(
                        function (user) {
                            user.websites.push(responseWeb);
                            return user.save();
                        }
                    );
            });
}

function findWebsiteById(id) {
    return websiteModel.findById(id);
}


function findWebsitesByUser(userId) {
    return websiteModel.find({developerId:userId});
}

function updateWebsite(websiteId, website) {
    return websiteModel.findByIdAndUpdate(websiteId, website,{new: true, safe: true})
        .then(
            function (responseWeb) {
                userModel.findById(website.developerId).then(
                    function (user) {
                        const index = findIndex(user.websites, websiteId);
                        user.websites.splice(index, 1);
                        user.websites.splice(index, 0, responseWeb);
                        return user.save();
                    }
                )
            }
        );
}

function findIndex(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]._id.toString() === target.toString()) {
            return i;
        }
    }
    return -1;
}

function deleteWebsite(websiteId){
    return websiteModel.findByIdAndRemove(websiteId).then(
        function (response) {
            userModel.findByIdAndUpdate(
                response.developerId,
                {$pull: {websites: {_id: websiteId}}},
                {safe: true, new: true},
                function (err) {
                    console.log(err);
                }
            );
        }
    );
}

module.exports = websiteModel;

