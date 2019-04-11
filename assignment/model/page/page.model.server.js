var mongoose = require('mongoose');
var PageSchema = require('./page.schema.server.js');
var Page = mongoose.model('Page', PageSchema);

Page.createPage = createPage;
Page.findAllPagesForWebsite = findAllPagesForWebsite;
Page.findPageById = findPageById;
Page.updatePage = updatePage;
Page.deletePage = deletePage;

module.exports = Page;

function createPage(websiteId, page) {
  page._website = websiteId;
  return Page.create(page);
}

function findAllPagesForWebsite(websiteId) {
  return Page.find({ _website: websiteId });
}

function findPageById(pageId) {
  return Page.findById(pageId);
}

function updatePage(pageId, page) {
  return Page.findByIdAndUpdate(pageId, page, {new: true});
}

function deletePage(pageId) {
  return Page.findByIdAndRemove(pageId);
}
