
module.exports=function (app) {

  app.get('/api/website/:websiteId', findWebsiteById);
  app.get('/api/user/:userId/website', findAllWebsitesByUser);
  app.post('/api/user/:userId/website', createWebsite);
  app.put('/api/website/:websiteId', updateWebsite);
  app.delete('/api/website/:websiteId', deleteWebsite);

  var websiteModel = require('../model/website/website.model.server');

  function findWebsiteById(req, res) {
    const websiteId = req.params.websiteId;
    websiteModel.findWebsiteById(websiteId)
      .then((website) => {
        res.json(website);
      }, (err) => {
        res.status(404).send(err);
      });
  }

  function createWebsite(req, res) {
    const website = req.body;
    website.developerId = req.params.userId;
    websiteModel.createWebsite(website.developerId, website)
      .then((website) => {
        res.json(website);
      }, (err) => {
        res.status(404).send(err);
      });
  }

  function findAllWebsitesByUser(req, res) {
    const userId = req.params.userId;
    websiteModel.findAllWebsitesForUser(userId)
      .then((websites) => {
        res.json(websites);
      }, (err) => {
        res.status(404).send(err);
      });
  }


  function updateWebsite(req, res) {
    const websiteId = req.params.websiteId;
    const website = req.body;
    websiteModel.updateWebsite(websiteId, website)
      .then((website) => {
        res.json(website);
      }, (err) => {
        res.status(404).send(err);
      });
  }

  function deleteWebsite(req, res) {
    const websiteId = req.params.websiteId;
    websiteModel.deleteWebsite(websiteId)
      .then((data) => {
        res.json(data);
      }, (err) => {
        res.status(404).send(err);
      });
  }

};
