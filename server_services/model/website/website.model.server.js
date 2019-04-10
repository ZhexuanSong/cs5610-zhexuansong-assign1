var mongoose = require('mongoose');

var websiteSchema = require('./website.schema.server');
var userModel = require('../user/user.model.server');
var websiteModel = mongoose.model('Website', websiteSchema);

websiteModel.createWebsite = createWebsite;

websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;

websiteModel.createWebsitePages = createWebsitePages;
websiteModel.updateWebsitePages = updateWebsitePages;
websiteModel.deleteWebsitePages = deleteWebsitePages;


module.exports = websiteModel;

function createWebsite(userId, website) {
  return websiteModel.create(website)
    .then((newWebsite) => {
      createWebsiteInUser(userId, newWebsite);
      return newWebsite;
    });
}

function findAllWebsitesForUser(userId) {
  return websiteModel.find({"developerId": userId});
}

function findWebsiteById(websiteId) {
  return websiteModel.findById(websiteId);
}

function updateWebsite(websiteId, website) {
  updateWebsiteInUser(website);
  return websiteModel.findByIdAndUpdate(websiteId, website);
}

function deleteWebsite(websiteId) {
  deleteWebsiteInUser(websiteId);
  return websiteModel.findByIdAndRemove(websiteId);
}

//helper function
function createWebsiteInUser(userId, website) {
  userModel.createUserWebsites(userId, website);
}

function deleteWebsiteInUser(websiteId) {
  websiteModel.findWebsiteById(websiteId)
    .then((website) => {
          userModel.deleteUserWebsites(website.developerId, websiteId);
    });
}

function updateWebsiteInUser(website) {
  userModel.updateUserWebsites(website.developerId, website);
}

//helper
function createWebsitePages(websiteId, page) {
  return websiteModel.findByIdAndUpdate(websiteId,
    {$push: {"pages": page}},
    {safe: true, upsert: true},
    () => {
      websiteModel.findWebsiteById(websiteId)
        .then((website) => {
          websiteModel.updateWebsite(websiteId, website);
        });
    }
    );
}

function updateWebsitePages(websiteId, page) {
  return websiteModel.findWebsiteById(websiteId)
    .then((website) => {
      const index = findIndex(website.pages, page);
      website.pages.splice(index,1);
      website.pages.splice(index,0,page);
      return website.save().then((website) => {
        websiteModel.updateWebsite(websiteId, website);
      });
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


function deleteWebsitePages(websiteId, pageId) {
  return websiteModel.findByIdAndUpdate(websiteId,
    {$pull: {'pages': {_id: pageId}}},
    {safe: true, new: true},
    () => {
      websiteModel.findWebsiteById(websiteId)
        .then((website) => {
          websiteModel.updateWebsite(websiteId, website);
        });
    }
    );
}


