const mongoose = require("mongoose");
const WebsiteSchema = require("./website.schema.server");
const WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);

const userModel = require("../user/user.model.server");

WebsiteModel.createWebsiteForUser = createWebsiteForUser;
WebsiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;

module.exports = WebsiteModel;

function createWebsiteForUser(website) {
  const promise = WebsiteModel.create(website);
  promise.then(function(responseWebsite) {
      userModel.findUserById(website._userId)
        .then(function(user) {
          user.websites.push(responseWebsite);
          return user.save();
        })
    });
  return promise;
}

function findAllWebsitesForUser(userId){
  return WebsiteModel.find({_userId: userId})
    .populate('_userId', 'username')
    .exec();
}

function findWebsiteById(websiteId){
  return WebsiteModel.findById({_id: websiteId});
}

function updateWebsite(websiteId, website) {
  return WebsiteModel.update({_id: websiteId}, website);
}

function deleteWebsite(websiteId){
  return findWebsiteById(websiteId)
    .then(function(website){
      WebsiteModel.remove({_id: websiteId})
        .then(function() {
          userModel.findUserById(website._userId).then(function(user) {
            if (user != null) {
              for (let i = 0; i < user.websites.length; i++) {
                if (user.websites[i].equals(websiteId)) {
                  user.websites.splice(i, 1);
                  return user.save();
                }
              }
            }
          })
        });
    });

}

