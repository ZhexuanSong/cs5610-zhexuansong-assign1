module.exports = function (app) {
    var websites = [
        {websiteId: '321', name: 'Facebook', developerId: '123', description: 'blabla'},
        {websiteId: '432', name: 'Twitter', developerId: '234',description: 'hahaha'},
        {websiteId: '234', name: 'Amazon', developerId: '345', description: 'hello world'},
        {websiteId: '333', name: 'MyWebSite', developerId: '123', description: 'have a good one'}
    ];
    var websiteModel = require('../model/website/website.model.server');
    var userModel = require('../model/user/user.model.server');
    app.post('/api/user/:uid/website', createWebsite);
    app.get('/api/user/:uid/website', findAllWebsitesForUser);
    app.get('/api/website/:websiteId', findWebsiteById);
    app.put('/api/website/:websiteId', updateWebsite);
    app.delete('/api/website/:websiteId', deleteWebsite);

    function createWebsite(req, res) {
        var developerId = req.params['uid'];
        var website = new Object();
        website.name = req.body.name;
        website.description = req.body.description;
        website.developerId = developerId;
        websiteModel
            .createWebsite(website)
            .then(
                function(website) {
                    res.status(200).send(website);
                }, function(error){
                    console.log('create website error: ' + error);
                    res.status(200).send({message: 'Create Website Failed!'});
                });
    }

    function findAllWebsitesForUser(req, res) {
        let userId = req.params['uid'];
        userModel
            .findUserById(userId)
            .then(
                function(user) {
                    res.status(200).send(user.websites);
                }, function(error){
                    console.log('find websites by user error: ' + error);
                    res.status(200).send({message: 'Website not found!'});
                });
    }

    function findWebsiteById(req, res) {
        var websiteId = req.params['websiteId'];
        websiteModel
            .findWebsiteById(websiteId)
            .then(
                function(website) {
                    res.status(200).send(website);
                }, function(error){
                    console.log('find website by id error: ' + error);
                    res.status(200).send({message: 'Website not found!'});
                });
    }

    function updateWebsite(req, res) {
        var websiteId = req.params['websiteId'];
        var website = req.body;
        websiteModel
            .updateWebsite(websiteId, website)
            .then(
                function(website) {
                    res.status(200).send(website);
                }, function(error){
                    console.log('update website error: ' + error);
                    res.status(200).send({message: 'Website not found!'});
                });
    }

    function deleteWebsite(req, res) {
        var websiteId = req.params['websiteId'];
        websiteModel
            .deleteWebsite(websiteId)
            .then(
                function(website) {
                    res.status(200).send(website);
                }, function(error){
                    console.log('delete website error: ' + error);
                    res.status(200).send({message: 'Website not found!'});
                });
    }
}
