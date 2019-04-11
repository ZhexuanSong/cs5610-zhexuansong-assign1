var mongoose = require('mongoose');
var WebsiteSchema = require('./website.schema.server.js');
var Website = mongoose.model('Website', WebsiteSchema);

Website.createWebsiteForUser = createWebsiteForUser;
Website.findAllWebsitesForUser = findAllWebsitesForUser;
Website.findWebsiteById = findWebsiteById;
Website.updateWebsite = updateWebsite;
Website.deleteWebsite = deleteWebsite;

module.exports = Website;

function createWebsiteForUser(userId, website) {
  website._user = userId;
  return Website.create(website);
}

function findAllWebsitesForUser(userId) {
  return Website.find({ _user: userId });
}

function findWebsiteById(websiteId) {
  return Website.findById(websiteId);
}

function updateWebsite(websiteId, website) {
  return Website.findByIdAndUpdate(websiteId, website);
}

function deleteWebsite(websiteId) {
  return Website.findByIdAndRemove(websiteId);
}
