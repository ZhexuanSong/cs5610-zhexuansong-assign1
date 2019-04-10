module.exports = function (app) {

    let userModel = require('../model/user/user.model.server');
    const passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;
    const FacebookStrategy = require('passport-facebook').Strategy;
    const bcrypt = require("bcrypt-nodejs");


    app.post("/api/user", createUser);
    //app.get("/api/user?username=*", findUserByName);
    app.get("/api/user?", findUserByCredentials);
    app.get("/api/user/:userId", findUserById);
    app.put("/api/user/:userId", updateUser);
    app.delete("/api/user/:userId", deleteUser);
    app.post('/api/logout', logout);

    app.post  ('/api/login', passport.authenticate('local'), login);

    app.post ('/api/register', register);

    app.get ('/api/loggedin', loggedin);

    app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));
    app.get('/auth/facebook/callback', 
        passport.authenticate('facebook', {  successRedirect: '/#/profile/',  failureRedirect: '/#/login' }));

    const facebookConfig = {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL? process.env.FACEBOOK_CALLBACK_URL: '/auth/facebook/callback'
    };
    // const facebookConfig = {
    //     clientID: 610435949421259,
    //     clientSecret: '4df0f4b575232a68cb9f04a23698c528',
    //     callbackURL: '/auth/facebook/callback'
    // };

    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    passport.use(new LocalStrategy(localStrategy));

    passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

    function facebookStrategy(token, refreshToken, profile, done) { 
        userModel .findUserByFacebookId(profile.id).then( function(user) { 
            if(user) { 
                return user;
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
            }, function(err) { 
                if (err) { return done(err); } 
            } ) .then( 
                function(user){
                    console.log('facebook: ' + user);
                    try{
                        return done(null, user);
                    } catch (e) {
                        console.log(e);
                    }

                },
                function(err){ 
                        if (err) { return done(err); } 
                } 
            ); 
    }

    function loggedin(req, res) {
        let isAuthenticated = req.isAuthenticated();
        console.log('server loggedin authenticated: ' + isAuthenticated);
        let user = '0';
        if (isAuthenticated) {
            user = req.user;
        }
        console.log('server loggedin: ' + user);
        res.json(user);
    }

    function register (req, res) {
        const user = req.body;
        user.password = bcrypt.hashSync(user.password);
        userModel
            .createUser(user)
            .then(
                function(user){
                    if(user){
                        // console.log('server register: ' + user);
                        req.login(user, function(err) {
                            if(err) {
                                res.status(400).send(err);
                            } else {
                                console.log('server register: ' + user);
                                res.json(user);
                            }
                        });
                    }
                }
            );
    }

    function login(req, res) {
        const user = req.user;
        res.json(user);
    }

    function logout(req, res) {req.logOut();} //res.send(200);}



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



    function localStrategy(username, password, done) {
        userModel
            .findUserByUserName(username)
            .then(
                function(user) {
                    if(user && bcrypt.compareSync(password, user.password)) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                },
                function(err) {
                    if (err) { return done(err); }
                }
            );
    }

    function createUser(req, res) {
        let user = req.body;
        userModel
            .createUser(user)
            .then(
                function (user) {
                    console.log("user created!");
                    res.json(user);
                },
                function (error) {
                    if (error) {console.log(error);
                        res.status(400).send(error);
                    }
                }
            )
    }

    function findUserByCredentials(req, res) {
        let username = req.query["username"];
        let password = req.query["password"];
        userModel
            .findByCredential(username,password)
            .exec(
                function (err,user) {
                    if(err){
                        return res.status(400).send(err);
                    }
                    return res.json(user);
                }
            );
    }

    function findUserById(req, res){
        let userId = req.params["userId"];
        userModel
            .findUserById(userId)
            .exec(
                function (err,user) {
                    if(err){
                        return res.status(400).send(err);
                    }
                    return  res.json(user);
                }
            );
    }

    function updateUser(req, res){
        let user = req.body;
        let userId = req.params["userId"];
        console.log('user server update' + user);
        userModel
            .updateUser(userId,user)
            .then(
                function (user) {
                    console.log('user server updated');
                    res.json(user);
                },
                function (err) {
                    res.status(400).send(err);
                }
            );
    }



    function deleteUser(req, res) {
        let userId = req.params["userId"];
        userModel
            .deleteUser(userId)
            .then(
                function (user) {
                    console.log('user service delete: ' + user);
                    res.json(user);
                },
                function (err) {
                    res.status(400).send(err);
                }
            );
    }


}
