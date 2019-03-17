
module.exports = function(app) {
  // fake data
  var users= [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
    {_id: "456", username: "jan", password: "jan", firstName: "Jose", lastName: "Annunzi" }
    ];
  // var users = [
  //   new User("123", "alice", "alice", "Alice", "Wonder"),
  //   new User("234", "bob", "bob", "Bob", "Marley"),
  //   new User("345", "charly", "charly", "Charly", "Garcia"),
  //   new User("456", "jan", "jan", "Jose", "Annunzi" )
  // ];

  // api list
  app.post('/api/user', createUser);
  app.get('/api/user/', findUserByUsername);
  app.get('/api/user/', findUserByCred);
  app.get('/api/user/:userid', findUserById);
  app.put('/api/user/:userid', updateUser);
  app.delete('/api/user/:userid', deleteUser);


  // functions
  function createUser(req, res) {
    var user = req.body;
    var lastId = users[users.length-1]._id;
    user._id = (+(lastId)+1).toString();
    users.push(user);
    res.status(200).send(user);
  }
  
  function findUserByUsername (req, res) {
    var username = req.query.username;
    let user = null;
    for (var i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        user = users[i];
      }
    }
    if (user == null) res.status(404).send("User not found by username");
    else res.status(200).send(user);
  }

  function findUserByCred (req, res) {
    var username = req.query.username;
    var password = req.query.password;
    for (var i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        res.status(200).send(users[i]);
        return;
      }
    }
    res.status(404).send("User not found by credential");
  }
  
  function findUserById (req, res) {
    // params must be the thing in the url placeholder
    var userId = req.params["userid"];
    for (var i = 0; i < users.length; i++)  {
      if (users[i]._id === userId) {
        res.status(200).send(users[i]);
        return;
      }
    }
    res.status(404).send("User not found by id");

  }

  function updateUser(req, res) {

    var userId = req.params["userid"];
    var user = req.body;
    for (var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users[i] = user;
        res.status(200).send(user);
        return;
      }
    }
    res.status(404).send("User not fount by delete user");
  }
  
  function deleteUser(req, res) {
    var userId = req.params["userid"];
    for (var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users.splice(i,1);
        res.status(200).send(users);
        return;
      }
    }
    res.status(404).send("User not fount by delete user");
  }


}
