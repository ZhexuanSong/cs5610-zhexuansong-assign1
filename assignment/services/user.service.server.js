module.exports=function (app) {

  var userModel = require('../model/user/user.model.server');
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var FacebookStrategy = require('passport-facebook').Strategy;
  var bcrypt = require('bcrypt-nodejs');

  app.get('/facebook/login', passport.authenticate('facebook', {scope: 'email'}));
  app.get('/auth/facebook/callback', passport.authenticate('facebook', {successRedirect: '/#/profile', failureRedirect: '/#/login'}));
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.post('/api/loggedin', loggedIn);
  app.post('/api/login', localAuthenticate);
  app.post('/api/logout',logout);
  app.post('/api/user', register);
  app.delete('/api/user/:userId', deleteUser);

  const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID? process.env.FACEBOOK_APP_ID : '588237745011344';
  const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET? process.env.FACEBOOK_APP_SECRET: '91720f11e8dc8705c0fa3b150529a6f0';
  const FACEBOOK_CALLBACK_URL = process.env.FACEBOOK_CALLBACK_URL? process.env.FACEBOOK_CALLBACK_URL: 'https://webdev-zhexuan-cs5610.herokuapp.com/auth/facebook/callback';


  var facebookConfig = {
    clientID : FACEBOOK_APP_ID,
    clientSecret : FACEBOOK_APP_SECRET,
    callbackURL : FACEBOOK_CALLBACK_URL
  };

  passport.use('local',new LocalStrategy(localStrategy));
  passport.use('facebook', new FacebookStrategy(facebookConfig, facebookStrategy));

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel.findUserByFacebookId(profile.id)
    .then( function(user) {
      if(user) { return done(null, user);
      } else {
        var names = profile.displayName.split(" ");
        var newFacebookUser = { lastName: names[1], firstName: names[0], email: profile.emails ? profile.emails[0].value:"", facebook: { id: profile.id, token: token }};
        return userModel.createUser(newFacebookUser);
      }}, function(err) {
      if (err) { return done(err);
      }})
    .then(
      function(user){
        return done(null, user);
        }, function(err){ if (err) { return done(err);}});}


  function logout(req, res) {
    req.logOut();
    res.status(200).send({message: 'log out successfully!'});
  }

  function localStrategy(username, password, done) {
    userModel.findUserByUsername(username)
      .then((user) => {
        if(user && bcrypt.compareSync(password, user.password)) {
          return done(null, user);
        } else {
          return done(null, false, {message: 'Invalid username or password!'});
        }
      }, (err) => {
        if(err) {
          return done(err);
        }
      });
  }

  function localAuthenticate(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.status(200).send({message: 'Invalid username or password.'}); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.json(user);
      });
    })(req, res, next);
  }

  passport.serializeUser(serializeUser);

  function serializeUser(user, done) {
    done(null, user._id);
  }

  passport.deserializeUser(deserializeUser);

  function deserializeUser(userId, done) {
    userModel.findUserById(userId)
      .then((user) => {
        done(null, user);
      }, (err) => {
        done(err, null);
      });
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function findUserById(req, res) {
    const userId = req.params.userId;
    userModel.findUserById(userId)
      .then((user) => {
          res.json(user);
      }, (err) => {
        res.status(404).send(err);
      });
  }


  function register(req, res) {
    const registeredUser = req.body;
    userModel.findUserByUsername(registeredUser.username)
      .then((user) => {
        if (!user) {
          registeredUser.password = bcrypt.hashSync(registeredUser.password);
          userModel
            .createUser(registeredUser)
            .then((user) => {
              if (user) {
                req.login(user, (err) => {
                  if (err) {
                    res.status(400).send(err);
                  } else {
                    res.json(user);
                  }
                });
              }
            });
        } else {
          res.status(200).send({message: 'User already exists'})
        }
      });
  }


  function updateUser(req, res) {
    const userId = req.params.userId;
    const user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel.updateUser(userId,user)
      .then((user) => {
        res.json(user);
        }, (err) => {
        res.status(404).send(err);
      });
  }



    function deleteUser(req, res) {
      const userId = req.params.userId;
      userModel.deleteUser(userId)
        .then((data) => {
          res.json(data);
        }, (err) => {
          res.status(404).send(err);
        });
    }

  };

