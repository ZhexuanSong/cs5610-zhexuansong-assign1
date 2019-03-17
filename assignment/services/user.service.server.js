module.exports = function(app) {

  app.post("/api/user", createUser);
  app.get("/api/user?", findUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

  const users = [
    {_id: '123', username: 'alice', password: 'alice', email: 'alice@test.com', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', password: 'bob', email: 'bob@test.com', firstName: 'Bod', lastName: 'Marley'},
    {
      _id: '345',
      username: 'charlie',
      password: 'charly',
      email: 'charlie@test.com',
      firstName: 'Charly',
      lastName: 'Garcia'
    },
    {
      _id: '456',
      username: 'jannunzi',
      password: 'jannunzi',
      email: 'jannunzi@test.com',
      firstName: 'Jose',
      lastName: 'Annunzi'
    }
  ];

  function createUser(req, res) {
    const user = req.body;
    user._id = (new Date()).getTime().toString();
    console.log('create user: ' + user._id + " " + user.username);
    users.push(user);
    res.json(user);
  }

  function findUser(req, res) {
    const username = req.query['username'];
    const password = req.query['password'];
    let user = null;
    if (username && password) {
      user = users.find(function (user) {
        return user.username === username && user.password === password;
      });
    } else if (username) {
      user = users.find(function (user) {
        return user.username === username;
      });
    }
    if (user) {
      console.log("find user: " + user._id + " " + user.username);
      res.json(user);
    } else {
      console.log("find user: not found");
      res.json({});
    }
  }

  function findUserById(req, res) {
    const userId = req.params['userId'];
    const user = users.find(function (user) {
      return user._id === userId;
    });
    if (user) {
      console.log("find user by id: " + user._id + " " + user.username);
      res.json(user);
    } else {
      console.log("find user by id: not found");
      res.json({});
    }
  }

  function updateUser(req, res) {
    const userId = req.params['userId'];
    const user = req.body;

    for(let i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        console.log(req.body);
        console.log("update user: " + userId + " " + user.username);

        users[i].username = user.username;
        users[i].firstName = user.firstName;
        users[i].lastName = user.lastName;
        users[i].email = user.email;
        res.status(200).send(user);
        return;
      }
    }
    res.status(404).send("not found!");
  }

  function deleteUser(req, res) {
    const userId = req.params['userId'];
    for (const i in users) {
      if (users[i]._id === userId) {
        const j = +i;
        res.json(users[i]);
        console.log('delete user: ' + userId);
        users.splice(j, 1);
        return;
      }
    }
  }
};
