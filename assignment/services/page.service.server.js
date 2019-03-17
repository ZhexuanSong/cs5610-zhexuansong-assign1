module.exports = function (app) {
  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  const pages = [
    {_id: '321', name: 'page321', websiteId: '321', description: 'test page 321'},
    {_id: '111', name: 'page111', websiteId: '111', description: 'test page 111'},
    {_id: '222', name: 'page222', websiteId: '222', description: 'test page 222'},
    {_id: '333', name: 'page3', websiteId: '333', description: 'test page 333'},
    {_id: '432', name: 'page432', websiteId: '432', description: 'test page 432'},
    {_id: '234', name: 'page234', websiteId: '234', description: 'test page 234'}
  ];

  function createPage(req, res) {
    const new_page = {
      _id: (new Date()).getTime().toString(),
      name: req.body.name,
      websiteId: req.params['websiteId'],
      title: req.body.title
    };

    console.log('create new page: ' + new_page._id + ' ' + new_page.name);
    pages.push(new_page);
    res.json(new_page);
  }

  function findAllPagesForWebsite(req, res) {
    const websiteId = req.params['websiteId'];
    const resultSet = pages.filter(function (page) {
      return page.websiteId === websiteId;
    });
    if (resultSet) {
      console.log('find pages for user: success');
      res.json(resultSet);
    } else {
      console.log('find pages for user: not found');
      res.json({});
    }
  }

  function findPageById(req, res) {
    const pageId = req.params['pageId'];
    const page = pages.find(function (page) {
      return page._id === pageId;
    });
    if (page) {
      console.log('find page by id: ' + page._id + ' ' + page.name);
      res.json(page);
    } else {
      console.log('find page by id: not found');
      res.json({});
    }
  }

  function updatePage(req, res) {
    const pageId = req.params['pageId'];
    const page = req.body;

    for (const i in pages) {
      if (pages[i]._id === pageId) {
        console.log(req.body);
        console.log("update page: " + pageId + " " + page.name);

        pages[i].name = page.name;
        pages[i].title = page.title;
        res.status(200).send(page);
      }
    }
    res.status(404).send("not found!");
  }

  function deletePage(req, res) {
    const pageId = req.params['pageId'];
    for (const i in pages) {
      const j = +i;
      res.json(pages[i]);
      console.log('delete page: ' + pageId);
      pages.splice(j, 1);
      return;
    }
  }

};
