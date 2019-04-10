module.exports=function (app) {

  var pages = [
    { pageId: '345', name: 'Post 1', websiteId: '890', description: 'Lorem' },
    { pageId: '456', name: 'Post 2', websiteId: '890', description: 'Lorem' },
    { pageId: '567', name: 'Post 3', websiteId: '345', description: 'Lorem' },
    { pageId: '678', name: 'Post 4', websiteId: '456', description: 'Lorem' },
    { pageId: '789', name: 'Post 5', websiteId: '567', description: 'Lorem' },
    { pageId: '890', name: 'Post 6', websiteId: '678', description: 'Lorem' },
    { pageId: '901', name: 'Post 6', websiteId: '789', description: 'Lorem' }
  ];

  var pageModel = require('../model/page/page.model.server');

  app.get('/api/page/:pageId', findPageById);
  app.get('/api/website/:websiteId/page', findAllPagesByWebsite);
  app.post('/api/website/:websiteId/page', createPage);
  app.put('/api/page/:pageId', updatePage);
  app.delete('/api/page/:pageId', deletePage);

  function findPageById(req, res) {
    const pageId = req.params.pageId;
    pageModel.findPageById(pageId)
      .then((page) => {
        res.json(page);
      }, (err) => {
        res.status(404).send(err);
      });
  }

  function createPage(req, res) {
    const page = req.body;
    page.websiteId = req.params.websiteId;
    pageModel.createPage(page.websiteId, page)
      .then((page) => {
        res.json(page);
      }, (err) => {
        res.status(404).send(err);
      });
  }

  function findAllPagesByWebsite(req, res) {
    const websiteId = req.params.websiteId;
    pageModel.findAllPagesByWebsite(websiteId)
      .then((websites) => {
        res.json(websites);
      }, (err) => {
        res.status(404).send(err);
      });
  }

  function updatePage(req, res) {
    const pageId = req.params.pageId;
    const page = req.body;
    pageModel.updatePage(pageId, page)
      .then((page) => {
        res.json(page);
      }, (err) => {
        res.status(404).send(err);
      });
  }

  function deletePage(req, res) {
    const pageId = req.params.pageId;
    pageModel.deletePage(pageId)
      .then((data) => {
        res.json(data);
      }, (err) => {
        res.status(404).send(err);
      });
  }


};
