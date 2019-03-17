module.exports = function(app) {
  // fake data
  var websites = [
    { "_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go", "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem" }

  ];
  // api list
  app.post('/api/user/:userId/website', createWebsite);
  app.get('/api/user/:userId/website', findWebsitesByUser);
  app.get('/api/website/:websiteId', findWebsiteById);
  app.put('/api/website/:websiteId', updateWebsite);
  app.delete('/api/website/:websiteId', deleteWebsite);

  // functions
  function createWebsite(req, res) {
    var website = req.body;
    var lastId = websites[websites.length-1]._id;
    website._id = (+(lastId)+1).toString();
    websites.push(website);
    res.status(200).send(website);
  }
  
  function findWebsitesByUser(req, res) {
    var userId = req.params["userId"];
    let list = [];
    for (var website of websites)  {
      if (website.developerId === userId) {
        list.push(website);
      }
    }
    res.status(200).send(list);

  }
  function findWebsiteById(req, res){
    var websiteId = req.params["websiteId"];
    var curSite = null;
    for (var website of websites)  {
      if (website._id === websiteId) {
        curSite = website;

      }
    }
    if (curSite == null) res.status(404).send("Website not found.");
    else res.status(200).send(curSite);

  }

  function updateWebsite(req, res) {
    var websiteId = req.params["websiteId"];
    var website = req.body;
    for (var i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        websites[i] = website;
        res.status(200).send(website);
        return;
      }
    }
    res.status(404).send("Website not fount by delete website");
  }
  
  function deleteWebsite(req, res) {
    var websiteId = req.params["websiteId"];
    for (var i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        websites.splice(i,1);
        res.status(200).send(websites);
        return;
      }
    }
    res.status(404).send("Website not fount by delete website");
  }

}
