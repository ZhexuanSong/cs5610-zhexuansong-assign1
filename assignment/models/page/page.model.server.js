const mongoose = require("mongoose");
const PageSchema = require("./page.schema.server");
const PageModel = mongoose.model('PageModel', PageSchema);

const websiteModel = require("../website/website.model.server");

PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;

module.exports = PageModel;

function createPage(websiteId, page) {
  const promise = PageModel.create(page);
  promise
    .then(function(responsePage) {
      websiteModel.findWebsiteById(websiteId)
        .then(function(website) {
          website.pages.push(responsePage);
          website.save();
        })
    });
  return promise;
}

function findAllPagesForWebsite(websiteId) {
  return PageModel.find({_websiteId: websiteId})
    .populate('_websiteId', 'name')
    .exec();
}

function findPageById(pageId) {
  return PageModel.findById({_id: pageId});
}

function updatePage(pageId, page) {
  return PageModel.update({_id: pageId}, page);
}

function deletePage(pageId) {
  return findPageById(pageId).then(function(page) {
    PageModel.remove({_id: pageId}).then(function() {
      websiteModel.findWebsiteById(page._websiteId).then(function(website) {
        if (website != null) {
          for (let i = 0; i < website.pages.length; i++) {
            if (website.pages[i].equals(pageId)) {
              website.pages.splice(i, 1);
              return website.save();
            }
          }
        }
      })
    })
  });
}
