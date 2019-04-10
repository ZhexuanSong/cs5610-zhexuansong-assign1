var mongoose = require("mongoose");
var WebsiteSchema = require("./website.schema.server")();
var Website = mongoose.model("Website", WebsiteSchema);
var pageModel = require("../page/page.model.server");
var widgetModel = require("../widget/widget.model.server");


Website.findAllWebsitesForUser = findAllWebsitesForUser;
Website.createWebsiteForUser = createWebsiteForUser;
Website.findWebsiteById = findWebsiteById;
Website.updateWebsite = updateWebsite;
Website.deleteWebsite = deleteWebsite;


function deleteWebsite(websiteId) {
  pageModel.find({_website: websiteId}).then(function (pages) {
    pages.forEach(function (page) {
      widgetModel.remove({_page: page._id}).exec();
    })
  })
  pageModel.remove({_website: websiteId}).exec();
  return Website.remove({_id: websiteId});
}

function updateWebsite(websiteId, website) {
  delete website._id;
  return Website
    .update({_id: websiteId}, {
        $set: {
          name: website.name,
          description: website.description
        }
      }
    );
}

function findWebsiteById(websiteId) {
  return Website.findById(websiteId);
}

function createWebsiteForUser(website) {
  website._id = mongoose.Types.ObjectId();
  return Website.create(website);
}

function findAllWebsitesForUser(userId) {
  return Website
    .find({developerId: userId});
}

module.exports = Website;
