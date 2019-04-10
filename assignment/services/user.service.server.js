module.exports = function (app) {
    var users = [
        {uid: '123', username: 'alice',    password: 'alice',    firstName: 'Alice',  lastName: 'Wonderland', email: "alice@wonder"  },
        {uid: '234', username: 'bob',      password: 'bob',      firstName: 'Bob',    lastName: 'Marley' , email: "bob@hotmail"},
        {uid: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia' , email: "charly@google"},
        {uid: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi', email: "jannunzi@yahoo"}
    ];

    var userModel = require('../model/user/user.model.server');
    var passport = require('passport');
    var bcrypt = require("bcrypt-nodejs");
    var LocalStrategy = require('passport-local').Strategy;
    var FacebookStrategy = require('passport-facebook').Strategy;
    var facebookConfig = {
        clientID : process.env.FACEBOOK_CLIENT_ID || 588237745011344,
        clientSecret : process.env.FACEBOOK_CLIENT_SECRET || '91720f11e8dc8705c0fa3b150529a6f0',
        callbackURL : process.env.FACEBOOK_CALLBACK_URL || '/auth/facebook/callback'
    };

    passport.serializeUser(serializeUser);
    function serializeUser(user, done) {
        done(null, user);
    }

    passport.deserializeUser(deserializeUser);
    function deserializeUser(user, done) {
        userModel.findUserById(user._id)
            .then(
                function(user){
                    done(null, user);
                },
                function(err){
                    done(err, null);
                } );
    }

    passport.use(new LocalStrategy(localStrategy));

    function localStrategy(username, password, done) {
        userModel.findUserByUsername(username)
            .then(
                function(user) {
                    if(user && bcrypt.compareSync(password, user.password)) {
                        return done(null, user);
                    } else {
                        return done(null, false); } },
                function(err) {
                    if (err) {
                        return done(err);
                    }
                });
    }


    passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

    app.post('/api/user', createUser);
    app.post('/api/login', login);
    app.post('/api/logout', logout);
    app.post ('/api/register', register);
    // app.get('/api/user?username=username', findUserByUserName);
    app.get('/api/user', findUserByCredentials);
    app.get('/api/user/:uid', findUserById);
    app.put('/api/user/:uid', updateUserById);
    app.delete('/api/user/:uid', deleteUserById);
    app.post('/api/loggedin', loggedin);
    app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/#/profile', failureRedirect: '/#/login' }));

    function facebookStrategy(token, refreshToken, profile, done) {
        userModel.findUserByFacebookId(profile.id)
            .then(
                function(user) {
                    if(user) {
                        return done(null, user);
                    } else {
                        var names = profile.displayName.split(" ");
                        var newFacebookUser = {
                            lastName: names[1],
                            firstName: names[0],
                            email: profile.emails ? profile.emails[0].value:"",
                            facebook: { id: profile.id, token: token } };
                        return userModel.createUser(newFacebookUser); } },
                function(err) {
                    if (err) {
                        return done(err);
                    }
                })
            .then(
                function(user){
                    return done(null, user);
                    },
                function(err){
                    if (err) {
                        return done(err);
                    }
                });
    }

    function loggedin(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    function login(req, res, next) {
        passport.authenticate('local', function(err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(200).send({message: 'User not found or Wrong password!'});
            }
            req.logIn(user, function(err) {
                if (err) {
                    return next(err);
                }
                return res.json(user);
            });
        })(req, res, next);
    }

    function logout(req, res) {
        req.logOut();
        res.status(200).send();
    }

    function register (req, res) {
        var user = req.body;
        user.password = bcrypt.hashSync(user.password);

        userModel.findUserByUsername(user.username).then(
            function(response) {
                if (!response) {
                    userModel.createUser(user)
                        .then(
                            function (user) {
                                if (user) {
                                    req.logIn(user,
                                        function (err) {
                                            if (err) {
                                                res.status(200).send({message: 'User is already exist!'});
                                            } else {
                                                res.json(user);
                                            }
                                        });
                                }
                            }
                        );
                } else {
                    res.status(200).send({message: 'User is already exist!'});
                }
            });
    }

    function createUser(req, res) {
        var user = new Object();
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;
        userModel.findUserByUsername(user.username).then(
            function(response) {
                if (!response) {
                    userModel
                        .createUser(user)
                        .then(function(user) {
                            res.status(200).send(user);
                        }, function(error){
                            console.log('create user error: ' + error);
                            res.status(200).send({message: 'User is already exist!'});
                        });
                } else {
                    res.status(200).send({message: 'User is already exist!'});
                }
            }
        );
    }

    function findUserByUserName(req, res) {
        let username = req.query.username;
        userModel
            .findUserByUsername(username)
            .then(function(user) {
                res.status(200).send(user);
            }, function(error){
                console.log('find user by username error: ' + error);
                res.status(200).send({message: 'User not found!'});
            });
    }

    function findUserByCredentials(req, res) {
        let username = req.query.username;
        let password = req.query.password;
        userModel
            .findUserByCredentials(username, password)
            .then(function(user) {
                res.status(200).send(user);
            }, function(error){
                console.log('find user by credentials error: ' + error);
                res.status(200).send({message: 'User not found or Wrong password!'});
            });
    }

    function findUserById(req, res) {
        var userId = req.params['uid'];
        userModel
            .findUserById(userId)
            .then(function(user) {
                res.status(200).send(user);
            }, function(error){
                console.log('find user by Id error: ' + error);
                res.status(200).send({message: 'User does exist!'});
            });
    }



    function updateUserById(req, res) {
        var userId = req.params['uid'];
        var user = req.body;
        user.password = bcrypt.hashSync(user.password);
        userModel
            .updateUser(userId, user)
            .then(function(user) {
                res.status(200).send(user);
            }, function(error){
                console.log('update user by Id error: ' + error);
                res.status(200).send({message: 'User not found!'});
            });
    }

    function deleteUserById(req, res) {
        var userId = req.params['uid'];
        userModel
            .deleteUser(userId)
            .then(function(user) {
                res.status(200).send(user);
            }, function(error){
                console.log('delete user by Id error: ' + error);
                res.status(200).send({message: 'User not found!'});
            });
    }
}
