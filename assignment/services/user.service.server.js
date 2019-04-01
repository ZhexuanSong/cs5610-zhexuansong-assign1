module.exports = function(app) {

  const userModel = require("../models/user/user.model.server");
  const websiteModel = require("../models/website/website.model.server");
  const pageModel = require("../models/page/page.model.server");
  const widgetModel = require("../models/widget/widget.model.server");

  app.post("/api/user", createUser);
  app.get("/api/user?", findUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

  // const users = [
  //   {_id: '123', username: 'alice', password: 'alice', email: 'alice@test.com', firstName: 'Alice', lastName: 'Wonder'},
  //   {_id: '234', username: 'bob', password: 'bob', email: 'bob@test.com', firstName: 'Bod', lastName: 'Marley'},
  //   {
  //     _id: '345',
  //     username: 'charlie',
  //     password: 'charly',
  //     email: 'charlie@test.com',
  //     firstName: 'Charly',
  //     lastName: 'Garcia'
  //   },
  //   {
  //     _id: '456',
  //     username: 'jannunzi',
  //     password: 'jannunzi',
  //     email: 'jannunzi@test.com',
  //     firstName: 'Jose',
  //     lastName: 'Annunzi'
  //   }
  // ];

  function createUser(req, res) {
    const newUser = req.body;
    userModel.createUser(newUser)
      .then(function(user) {
        res.status(200).json(user);
        console.log('created user: ' + user);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function findUser(req, res) {
    const username = req.query["username"];
    const password = req.query["password"];
    if (username && password){
      const promise = userModel.findUserByCredentials(username, password);
      promise.then(function(user) {
        res.status(200).json(user);
        console.log('found user by credentials: ' + user);
      }, function(err) {
        console.log(err);
        res.status(500);
      });
      return;
    } else if (username){
      userModel.findUserByUserName(username)
        .then(function(user) {
          res.status(200).json(user);
          console.log('found user by username: ' + user);
        }, function(err) {
          console.log(err);
          res.status(500);
        });
      return;
    }
    console.log('found user: username is not provided');
    res.json({});
  }

  function findUserById(req, res) {
    const userId = req.params['userId'];
    userModel.findUserById(userId).then(function(user) {
      res.json(user);
      console.log('found user by id: ' + user);
    }, function(err) {
      console.log(err);
      res.status(500);
    });
  }

  function updateUser(req, res) {
    const userId = req.params.userId;
    const user = req.body;
    userModel.updateUser(userId, user)
      .then(function(response) {
        res.status(200).json({});
        console.log('updated user');
      }, function(err) {
        console.log(err);
        res.status(500);
      });
  }

  function deleteUser(req, res) {
    const userId = req.params['userId'];
    userModel.deleteUser(userId)
      .then(function(response) {
        websiteModel.findAllWebsitesForUser(userId)
          .then(function (websites) {
            websites.forEach(function (website) {
              websiteModel.deleteWebsite(website._id);
              pageModel.findAllPagesForWebsite(website._id)
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
                })
            })
          });
        res.status(200).json({});
        console.log('deleted user: userId = ' + userId);
      }, function(err) {
        console.log(err);
        res.status(500);
    });
  }
};
