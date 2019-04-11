module.exports = function (app) {

    app.post("/api/user", createUser);
    //app.get("/api/user?username=*", findUserByName);
    app.get("/api/user?", findUserByCredentials);
    app.get("/api/user/:userId", findUserById);
    app.put("/api/user/:userId", updateUser);
    app.delete("/api/user/:userId", deleteUser);

    let userModel = require('../model/user/user.model.server');

    let users = [
        {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonderland"},
        {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
        {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
    ];

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

    function findUserByName(req, res) {
        let username = req.query["username"];
        let user = null;
        if (username){
            user = users.find(function (user) {
                return user.username === username;
            });
            if (user != null) {
                res.json(user);
                return;
            }
        }
        res.status(404).send("This user doesn't exist.");
    }

    function findUserByCredentials(req, res) {
        let username = req.query["username"];
        let password = req.query["password"];
        userModel
            .findByCredential(username,password)
            .exec(
                function (err,user) {
                    if(err){
                        return res.sendStatus(400).send(err);
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
                        return res.sendStatus(400).send(err);
                    }
                    return  res.json(user);
                }
            );
    }

    function updateUser(req, res){
        let userId = req.params['userId'];
        let user = req.body;

        userModel
            .updateUser(userId,user)
            .then(
                function (user) {
                    res.json(user);
                },
                function (err) {
                    res.status(400).send(err);
                }
            );
    }



    function deleteUser(req, res) {
        let user = req.body;
        userModel
            .deleteUser(user._id)
            .then(
                function (user) {
                    console.log('user service: ' + user);
                    res.json(user);
                },
                function (err) {
                    res.status(400).send(err);
                }
            );
    }


}
