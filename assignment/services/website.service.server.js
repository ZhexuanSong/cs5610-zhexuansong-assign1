module.exports = function (app) {
    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website", findAllWebsitesForUser);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put("/api/website/:websiteId", updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);

    let websites = [
        { _id: "123", name: "Facebook", userId: "456", description: "Lorem" },
        { _id: "234", name: "Tweeter", userId: "456", description: "Lorem" },
        { _id: "456", name: "Gizmodo", userId: "456", description: "Lorem" },
        { _id: "890", name: "Go", userId: "123", description: "Lorem" },
        { _id: "567", name: "Tic Tac Toe", userId: "123", description: "Lorem" },
        { _id: "678", name: "Checkers", userId: "123", description: "Lorem" },
        { _id: "789", name: "Chess", userId: "234", description: "Lorem" }
    ];

    let websiteModel = require('../model/website/website.model.server');

    function createWebsite(req, res) {
        let website = req.body;
        console.log(website);

        websiteModel.createWebsite(website._user,website)
            .then(
                function (website) {
                    console.log(website);
                    res.json(website);
                },
                function (error) {
                    res.status(400).send(error);
                }
            )
    }

    function findAllWebsitesForUser(req, res) {
        let userId = req.params.userId;
        websiteModel.findAllWebsiteForUser(userId).then(
            function (websites) {
                console.log(websites);
                res.json(websites);
            },
            function (error) {
                res.status(400).send(error);
            }
        );
    }

    function findWebsiteById(req, res) {
        let websiteId = req.params.websiteId;
        websiteModel.findWebsiteById(websiteId)
            .then(
                function(website){
                    res.json(website);
                },
                function (err) {
                    res.status(400).send(err);
                }
            )
    }

    function updateWebsite(req, res) {
        let websiteId = req.params.websiteId;
        let website = req.body;

        websiteModel.updateWebsite(websiteId,website)
            .then(
                function (website) {
                    res.json(website);
                },
                function (err) {
                    res.status(400).send(err);
                }
            );
    }

    function deleteWebsite(req, res) {
        let websiteId = req.params.websiteId;
        websiteModel.deleteWebsite(websiteId)
            .then(
                function (data) {
                    res.json(data);
                },
                function (err) {
                    res.status(400).send(err);

                }
            );
    }
}
