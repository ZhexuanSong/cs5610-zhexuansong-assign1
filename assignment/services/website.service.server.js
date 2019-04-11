var _ = require('lodash');

module.exports = function(app){
  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);

//   var websites = [
//     {'_id': '123', 'name': 'Facebook', developerId: '456', 'description': 'Lorem'},
//     {'_id': '235', 'name': 'Tweeter', developerId: '456', 'description': 'Lorem'},
//     {'_id': '456', 'name': 'Gizmodo', developerId: '456', 'description': 'Lorem'},
//     {'_id': '890', 'name': 'Go', developerId: '123', 'description': 'Lorem'},
//     {'_id': '567', 'name': 'Tic Tac Toe', developerId: '123', 'description': 'Lorem'},
//     {'_id': '678', 'name': 'Checkers', developerId: '123', 'description': 'Lorem'},
//     {'_id': '789', 'name': 'Chess', developerId: '234', 'description': 'Lorem'}
//
// ];
  var websiteModel = require("../model/website/website.model.server.js");

  function createWebsite(req, res) {
    var userId = req.params.userId;
    var website = _.pick(req.body, ['name', 'developerId', 'description']);
    websiteModel.createWebsiteForUser(userId, website).then(
      function (website) {
        if (website) {
          res.json(website);
        } else {
          res.status(200).send({});
        }
      },
      function (err) {
        res.status(400).send(err);
      }
    );
  }

  function findAllWebsitesForUser(req, res) {
    var userId = req.params.userId;
    websiteModel.findAllWebsitesForUser(userId).then(
      function (website) {
        res.json(website);
      },
      function (err) {
        res.status(400).send(err);
      }
    );
  }

  function findWebsiteById(req, res) {
    var websiteId = req.params.websiteId;
    websiteModel.findWebsiteById(websiteId).then(
      function (website) {
        if (website) {
          res.json(website);
        } else {
          res.status(400).send("Cannot find website with corresponding Id");
        }
      },
      function (err) {
        res.status(400).send(err);
      }
    );
  }

  function updateWebsite(req, res) {
    var websiteId = req.params.websiteId;
    var updatedWebsite = req.body;

    websiteModel.updateWebsite(websiteId, updatedWebsite).then(
      function (website) {
        if (website) {
          res.json(website);
        } else {
          send(400).send("Cannot find website with corresponding Id");
        }
      },
      function (err) {
        send(400).send(err);
      }
    );
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params.websiteId;
    websiteModel.deleteWebsite(websiteId).then(
      function (website) {
        res.json(website);
      },
      function (err) {
        send(400).send(err);
      }
    );
  }
};
