let mongoose = require('mongoose');

let pageSchema = require('./page.schema.server');
let pageModel = mongoose.model("Page",pageSchema);
let websiteModel = require('../website/website.model.server');

pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;
module.exports = pageModel;

function createPage(webId,page) {
    page._website = webId;
    console.log('page model: ' + page._website);
    return pageModel.create(page)
        .then(
            function (createdPage) {
                return createdPage;
            }
        );
}
function findAllPagesForWebsite(websiteId) {
    return pageModel.find({_website:websiteId.toString()});
}
function findPageById(pageId){
    return pageModel.findById(pageId);
}
function updatePage(pageId,page) {
    return pageModel.findByIdAndUpdate(pageId,page);
}
function deletePage(pageId) {
    return pageModel.findByIdAndRemove(pageId);
}
