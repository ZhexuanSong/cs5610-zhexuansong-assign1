var mongoose = require('mongoose');

var pageSchema = require('./page.schema.server');
var websiteModel = require('../website/website.model.server');
var userModel = require('../user/user.model.server');
var pageModel = mongoose.model('Page', pageSchema);

pageModel.createPage = createPage;
pageModel.findAllPagesByWebsite = findAllPagesByWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;

pageModel.createPageWidgets = createPageWidgets;
pageModel.updatePageWidgets = updatePageWidgets;
pageModel.deletePageWidgets = deletePageWidgets;


module.exports = pageModel;
function createPage(websiteId, page) {
  return pageModel.create(page)
    .then((newPage) => {
      createPageInWeb(websiteId,newPage);
      return newPage;
    });
}

function findAllPagesByWebsite(websiteId) {
  return pageModel.find({websiteId:websiteId});
}
function findPageById(pageId){
  return pageModel.findById(pageId);
}
function updatePage(pageId, page) {
  updatePageInWeb(page);
  return pageModel.findByIdAndUpdate(pageId, page, {new: true, safe:true})
    .then((newPage) => {
      console.log(newPage.widgets);
    });
}

function deletePage(pageId) {
  deletePageInWeb(pageId);
  return pageModel.findByIdAndRemove(pageId);
}

function createPageInWeb(websiteId, page) {
  websiteModel.createWebsitePages(websiteId, page);
}

function updatePageInWeb(page) {
  websiteModel.updateWebsitePages(page.websiteId, page);
}

function deletePageInWeb(pageId) {
  pageModel.findPageById(pageId)
    .then((page) => {
       websiteModel.deleteWebsitePages(page.websiteId, pageId);
    });
}

function createPageWidgets(pageId, widget) {
   pageModel.findByIdAndUpdate(pageId,
    {$push: {"widgets": widget}},
    {safe: true, new: true},
    () => {
      pageModel.findPageById(pageId)
        .then((page) => {
          pageModel.updatePage(pageId, page);
        });
    }
    );
}

function updatePageWidgets(pageId, widget) {
  return pageModel.findPageById(pageId)
    .then((page) => {
      const index = findIndex(page.widgets, widget);
      page.widgets.splice(index, 1);
      page.widgets.splice(index, 0, widget);
      return page.save().then((page) => {
        pageModel.updatePage(pageId, page);
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

 function deletePageWidgets(pageId, widgetId) {
  pageModel.findByIdAndUpdate(pageId,
    {$pull: {'widgets': {_id: widgetId}}},
    {safe: true, new: true},
    () => {
      pageModel.findPageById(pageId)
        .then((page) => {
          pageModel.updatePage(pageId, page);
        });
    }
    );
}
