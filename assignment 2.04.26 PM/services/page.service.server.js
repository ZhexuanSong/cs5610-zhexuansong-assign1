module.exports = function (app) {
    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);

    let pages = [
        { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
        { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
        { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
    ];

    let pageModel = require('../model/page/page.model.server');

    function createPage(req, res) {
        let page = req.body;
        let websiteId = req.params.websiteId;

        pageModel.createPage(websiteId,page)
            .then(
                function (page) {
                    console.log('page server create' + page);
                    res.json(page);
                },
                function (error) {
                    res.status(400).send(error);
                }
            )
    }

    function findAllPagesForWebsite(req, res) {
        let websiteId = req.params.websiteId;
        pageModel.findAllPagesForWebsite(websiteId)
            .then(
                function (pages) {
                    console.log('page server find all pages: ' + pages);
                    res.json(pages);
                },
                function (err) {
                    res.status(400).send(err);
                }
            )
    }

    function findPageById(req, res) {
        let pageId = req.params.pageId;
        pageModel.findPageById(pageId)
            .then(
                function (page) {
                    res.json(page);
                },
                function (err) {
                    res.status(400).send(err);
                }
            )
    }

    function updatePage(req, res) {
        let pageId = req.params.pageId;
        let updatedPage = req.body;
        pageModel.updatePage(pageId, updatedPage)
            .then(
                function (page) {
                    res.json(page);
                },
                function (err) {
                    res.status(400).send(err);
                }
            )
    }

    function deletePage(req, res) {
        let pageId = req.params.pageId;
        pageModel.deletePage(pageId)
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
