module.exports = function (app) {
  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);

  const websites = [
    {_id: '321', name: 'Facebook', developerId: '123', description: 'test'},
    {_id: '111', name: 'Facebook1', developerId: '123', description: 'test'},
    {_id: '222', name: 'Facebook2', developerId: '123', description: 'test'},
    {_id: '333', name: 'Facebook3', developerId: '123', description: 'test'},
    {_id: '432', name: 'Twitter', developerId: '456', description: 'test'},
    {_id: '234', name: 'Amazon', developerId: '789', description: 'test'}
  ];

  function createWebsite(req, res) {
    const new_website = {
      _id: (new Date()).getTime().toString(),
      name: req.body.name,
      developerId: req.params['userId'],
      description: req.body.description
    };
    console.log('create website: ' + new_website._id + " " + new_website.name);
    websites.push(new_website);
    res.json(new_website);
  }

  function findAllWebsitesForUser(req, res) {
    const userId = req.params['userId'];
    const resultSet = websites.filter(function (website) {
      return website.developerId === userId;
    });
    if (resultSet) {
      console.log("find websites for user: success");
      res.json(resultSet);
    } else {
      console.log("find websites for user: not found");
      res.json({});
    }
  }

  function findWebsiteById(req, res) {
    const websiteId = req.params['websiteId'];
    const website = websites.find(function (website) {
      return website._id === websiteId;
    });
    if (website) {
      console.log("find website by id: " + website._id + " " + website.name);
      res.json(website);
    } else {
      console.log("find website by id: not found");
      res.json({});
    }
  }

  function updateWebsite(req, res) {
    const websiteId = req.params['websiteId'];
    const website = req.body;

    for (const i in websites) {
      if (websites[i]._id === websiteId) {
        console.log(req.body);
        console.log("update website: " + websiteId + " " + website.name);

        websites[i].name = website.name;
        websites[i].description = website.description;
        res.status(200).send(website);
        return;
      }
    }
    res.status(404).send("not found!");
  }

  function deleteWebsite(req, res) {
    const websiteId = req.params['websiteId'];
    for (const i in websites) {
      if (websites[i]._id === websiteId) {
        const j = +i;
        res.json(websites[i]);
        console.log('delete website: ' + websiteId);
        websites.splice(j, 1);
        return;
      }
    }
  }
};
