module.exports = function (app) {

  const websiteModel = require("../models/website/website.model.server");
  const pageModel = require("../models/page/page.model.server");
  const widgetModel = require("../models/widget/widget.model.server");

  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);

  // const websites = [
  //   {_id: '321', name: 'Facebook', developerId: '123', description: 'test'},
  //   {_id: '111', name: 'Facebook1', developerId: '123', description: 'test'},
  //   {_id: '222', name: 'Facebook2', developerId: '123', description: 'test'},
  //   {_id: '333', name: 'Facebook3', developerId: '123', description: 'test'},
  //   {_id: '432', name: 'Twitter', developerId: '456', description: 'test'},
  //   {_id: '234', name: 'Amazon', developerId: '789', description: 'test'}
  // ];

  function createWebsite(req, res) {
    const userId = req.params['userId'];
    const website = req.body;
    website._userId = userId;
    websiteModel.createWebsiteForUser(website)
      .then(function(response) {
        console.log('created website: ' + response);
        websiteModel.findAllWebsitesForUser(userId)
          .then(function (websites){
            res.status(200).json(websites);
          })
      }, function(err){
        console.log(err);
        res.status(500);
      });
  }

  function findAllWebsitesForUser(req, res) {
    const userId = req.params['userId'];
    websiteModel.findAllWebsitesForUser(userId)
      .then(function(websites){
        res.status(200).json(websites);
        console.log('found all websites for user:\n' + websites);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function findWebsiteById(req, res) {
    const websiteId = req.params['websiteId'];
    websiteModel.findWebsiteById(websiteId)
      .then(function(website){
        console.log('found website by id:\n' + website);
        res.status(200).json(website);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function updateWebsite(req, res) {
    const websiteId = req.params['websiteId'];
    const website = req.body;
    websiteModel.updateWebsite(websiteId, website)
      .then(function(response) {
        res.status(200).json({});
        console.log('updated website: websiteId = ' + websiteId);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function deleteWebsite(req, res) {
    const websiteId = req.params['websiteId'];
    websiteModel.deleteWebsite(websiteId)
      .then(function(response){
        pageModel.findAllPagesForWebsite(websiteId)
          .then(function(pages) {
            pages.forEach(function(page) {
              pageModel.deletePage(page._id);
              widgetModel.findAllWidgetsForPage(page._id)
                .then(function(widgets) {
                  widgets.forEach(function(widget) {
                    widgetModel.deleteWidget(widget._id);
                  })
                })
            })
          });
        res.status(200).json({});
        console.log('deleted website: websiteId = ' + websiteId);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }
};
