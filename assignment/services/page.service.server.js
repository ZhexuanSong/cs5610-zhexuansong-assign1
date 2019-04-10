module.exports = function (app) {
    var pages = [
        {pageId: '001', name: 'Post 1', websiteId: '321', description: 'Lorem'},
        {pageId: '12', name: 'Post 2', websiteId: '321', description: 'Lorem'},
        {pageId: '123', name: 'Post 3', websiteId: '321', description: 'Lorem'},
        {pageId: '124', name: 'Post 1', websiteId: '333', description: 'Lorem'}
    ];
    var pageModel = require('../model/page/page.model.server');
    var websiteModel = require('../model/website/website.model.server');
    app.post('/api/website/:websiteId/page', createPage);
    app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
    app.get('/api/page/:pageId', findPageById);
    app.put('/api/page/:pageId', updatePage);
    app.delete('/api/page/:pageId', deletePage);

    function createPage(req, res) {
        var websiteId = req.params['websiteId'];
        var page = new Object();
        page.name = req.body.name;
        page.description = req.body.description;
        page.websiteId = websiteId;
        pageModel
            .createPage(page)
            .then(
                function(page) {
                    res.status(200).send(page);
                }, function(error){
                    console.log('create page error: ' + error);
                    res.status(200).send({message: 'Create Page Failed!'});
                });
    }

    function findAllPagesForWebsite(req, res) {
        let websiteId = req.params['websiteId'];
        websiteModel
            .findWebsiteById(websiteId)
            .then(
                function(website) {
                    res.status(200).send(website.pages);
                }, function(error){
                    console.log('find page by website error: ' + error);
                    res.status(200).send({message: 'Page not found!'});
                });
    }

    function findPageById(req, res) {
        var pageId = req.params['pageId'];
        pageModel
            .findPageById(pageId)
            .then(
                function(page) {
                    res.status(200).send(page);
                }, function(error){
                    console.log('find page by id error: ' + error);
                    res.status(200).send({message: 'Page not found!'});
                });
    }

    function updatePage(req, res) {
        var pageId = req.params['pageId'];
        var page = req.body;
        pageModel
            .updatePage(pageId, page)
            .then(
                function(page) {
                    res.status(200).send(page);
                }, function(error){
                    console.log('update page error: ' + error);
                    res.status(200).send({message: 'Page not found!'});
                });
    }

    function deletePage(req, res) {
        var pageId = req.params['pageId'];
        pageModel
            .deletePage(pageId)
            .then(
                function(page) {
                    res.status(200).send(page);
                }, function(error){
                    console.log('delete page by id error: ' + error);
                    res.status(200).send({message: 'Page not found!'});
                });
    }
}
