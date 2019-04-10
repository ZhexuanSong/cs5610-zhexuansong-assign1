const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const bcrypt = require('bcrypt-nodejs');

module.exports = function(app) {


  const userModel = require("../models/user/user.model.server");
  const websiteModel = require("../models/website/website.model.server");
  const pageModel = require("../models/page/page.model.server");
  const widgetModel = require("../models/widget/widget.model.server");

  // const appId = 267669687469493;
  // const appSecret = 'b29af8d8b9b1eb08314fcc24cbdbdfda';
  // const facebookConfig = {
  //   clientID     : appId,
  //   clientSecret : appSecret,
  //   callbackURL: 'localhost:3200/auth/facebook/callback'
  // };
  const facebookConfig = {
    clientID     : process.env.FB_CLIENT_ID_WAM,
    clientSecret : process.env.FB_CLIENT_SECRET_WAM,
    callbackURL: process.env.FB_CALL_BACK_URL_WAM
  };

  app.post("/api/user", createUser);
  app.get("/api/user?", findUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

  //authentication api
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/register', register);
  app.post ('/api/loggedIn', loggedIn);

  // auth with Facebook
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/profile',
      failureRedirect: '/login'
    }));
  app.get('/facebook/login', passport.authenticate('facebook', { scope: 'email' }));

  // passport config
  passport.use(new LocalStrategy(localStrategy));
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  function localStrategy(username, password, done) {
    userModel
      .findUserByUserName(username)
      .then(
        function(user) {
          if (user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) {
            return done(err);
          }
        }
      );
  }

  function serializeUser(user, done) {
    done(null, user);
  }
  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function login(req, res) {
    // console.log('login from server');
    const user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    // console.log('logout from server');
    req.logout();
    res.status(200).json({}); //success
  }


  function register (req, res) {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel.createUser(user)
      .then(
        function(newUser) {
          if (newUser) {
            req.login(newUser, function(err) {
              if (err) {
                res.status(400).send(err);
              } else {
                res.status(200).json(newUser);
              }
            })
          } else {
            res.status(500).send('Cannot create new user');
          }
        }
      )
  }

  function loggedIn(req, res) {
    // console.log('loggedIn from server');
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel
      .findUserByFacebookId(profile.id)
      .then(
        function(user) {
          if(user) {
            return done(null, user);
          } else {
            const names = profile.displayName.split(" ");
            const newFacebookUser = {
              lastName: names[1],
              firstName: names[0],
              email: profile.emails ? profile.emails[0].value : "",
              facebook: {
                id: profile.id,
                token: token
              }
            };
            return userModel.createUser(newFacebookUser);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      )
      .then(
        function(user){
          return done(null, user);
        },
        function(err){
          if (err) { return done(err); }
        }
      );
  }

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
