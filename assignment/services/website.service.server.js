module.exports = function (app) {
  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);
  var websiteModel = require("../model/website/website.model.server");

  function createWebsite(req, res) {
    var website = req.body;
    var userId = req.params["userId"];
    website.developerId = userId;
    websiteModel.createWebsiteForUser(website).then(function (website) {
      res.json(website);
    });
  }

  function findAllWebsitesForUser(req, res) {
    var userId = req.params["userId"];
    return websiteModel.findAllWebsitesForUser(userId).then(function (websites) {
      res.json(websites);
    })
  }

  function findWebsiteById(req, res) {
    var websiteId = req.params["websiteId"];
    websiteModel.findWebsiteById(websiteId).then(function (website) {
      res.json(website);
    })
  }

  function updateWebsite(req, res) {
    var websiteId = req.params["websiteId"];
    var website = req.body;
    websiteModel.updateWebsite(websiteId, website).then(function (website) {
      res.send(website);
    });
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params["websiteId"];
    websiteModel.deleteWebsite(websiteId).then(function (status) {
      res.send(status);
    });
  }
}
