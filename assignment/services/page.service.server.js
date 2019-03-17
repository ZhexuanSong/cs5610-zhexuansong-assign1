module.exports = function(app) {
  // fake data
  var pages=[
    { "_id": "321", "name": "Post 1", "websiteId": "456", "title": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "title": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "title": "Lorem" }

  ];
  // api list
  
  app.post('/api/website/:websiteId/page', createPage);
  app.get('/api/website/:websiteId/page', findPagesByWebsite);
  app.get('/api/page/:pageId', findPageById);
  app.put('/api/page/:pageId', updatePage);
  app.delete('/api/page/:pageId', deletePage);

  // function list
  function createPage(req, res) {
    var page = req.body;
    var lastId = pages[pages.length-1]._id;
    page._id = (+(lastId)+1).toString();
    pages.push(page);
    res.status(200).send(page);
  }

  function findPagesByWebsite(req, res) {
    var websiteId = req.params["websiteId"];
    let list = [];
    for (var page of pages)  {
      if (page.websiteId === websiteId) {
        list.push(page);
      }
    }
    res.status(200).send(list);

  }
  
  function findPageById(req, res){
    var pageId = req.params["pageId"];
    var curSite = null;
    for (var page of pages)  {
      if (page._id === pageId) {
        curSite = page;

      }
    }
    if (curSite == null) res.status(404).send("Page not found.");
    else res.status(200).send(curSite);

  }

  function updatePage(req, res) {
    var pageId = req.params["pageId"];
    var page = req.body;
    for (var i = 0; i < pages.length; i++) {
      if (pages[i]._id === pageId) {
        pages[i] = page;
        res.status(200).send(page);
        return;
      }
    }
    res.status(404).send("Page not fount by delete page");
  }

  function deletePage(req, res) {
    var pageId = req.params["pageId"];
    for (var i = 0; i < pages.length; i++) {
      if (pages[i]._id === pageId) {
        pages.splice(i,1);
        res.status(200).send(pages);
        return;
      }
    }
    res.status(404).send("Page not fount by delete page");
  }
}
