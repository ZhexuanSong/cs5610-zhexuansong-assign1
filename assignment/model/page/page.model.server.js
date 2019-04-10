var mongoose = require("mongoose");
var PageSchema = require("./page.schema.server")();
var Page = mongoose.model("Page", PageSchema);
var Widget = require("../widget/widget.model.server");

Page.findAllPagesForWebsite = findAllPagesForWebsite;
Page.createPage = createPage;
Page.updatePage = updatePage;
Page.findPageById = findPageById;
Page.deletePage = deletePage;

function findAllPagesForWebsite(websiteId) {
  return Page.find({_website: websiteId});
}

function createPage(websiteId, page) {
  page._id = mongoose.Types.ObjectId();
  page._website = websiteId;
  return Page.create(page);

}

function updatePage(pageId, page) {
  delete page._id;
  return Page
    .update({_id: pageId}, {
        $set: {
          name: page.name,
          title: page.title
        }
      }
    );
}

function findPageById(pageId) {
  return Page.findById(pageId);
}

function deletePage(pageId) {
  Widget.remove({_page: pageId}).exec();
  return Page.remove({_id: pageId});
}

module.exports = Page;

