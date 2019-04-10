var mongoose =  require('mongoose');
var pageSchema = require('./page.schema.server');

var pageModel = mongoose.model('Page', pageSchema);
var websiteModel = require('../website/website.model.server');

pageModel.createPage = createPage;
pageModel.findPageById = findPageById;
pageModel.findPagesByWebsite = findPagesByWebsite;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;

function createPage(page) {
    return pageModel.create(page).then(
        function (response) {
            return websiteModel.findById(page.websiteId).then(
                function (website) {
                    website.pages.push(response);
                    return website.save();
                }
            )
        });
}

function findPageById(id) {
    return pageModel.findById(id);
}


function findPagesByWebsite(websiteId) {
    return pageModel.find({websiteId:websiteId});
}

function updatePage(pageId,page) {
    return pageModel.findByIdAndUpdate(pageId, page, {new: true})
        .then(
            function (responsePage) {
                websiteModel.findWebsiteById(page.websiteId)
                    .then(
                        function (website) {
                            const index = findIndex(website.pages, pageId);
                            website.pages.splice(index, 1);
                            website.pages.splice(index, 0, responsePage);
                            return website.save();
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

function deletePage(pageId){
    return pageModel.findByIdAndRemove(pageId).then(
            function (response) {
                websiteModel.findByIdAndUpdate(
                    response.websiteId,
                    {$pull: {pages: {_id: pageId}}},
                    {safe: true, new: true},
                    function (err) {
                        console.log(err);
                    }
                );
            }
        );
}

module.exports = pageModel;
