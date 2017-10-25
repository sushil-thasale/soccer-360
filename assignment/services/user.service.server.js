
module.exports = function (app) {

  var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder",email: "alice@abc.com"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@abc.com"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@abc.com"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: "jose@abc.com"}
  ];

  app.post("/api/user", createUser);
  app.get("/api/user", findUser);
  // app.get("/api/user", findUserByCredentials);
  app.get("/api/user/:userID", findUserById);
  app.put("/api/user/:userID", updateUser);
  app.delete("/api/user/:userID", deleteUser);

  function createUser(req, res) {
    var newUser = req.body;
    newUser._id = "" + (new Date()).getTime();
    users.push(newUser);
    res.json(newUser);
  }

  function findUser(req, res) {
    var username = req.query.username;
    var password = req.query.password;

    if (username && password) {
      findUserByCredentials(req, res);
    }
    else if (username) {
      findUserByUsername(req, res);
    }

  }

  function findUserByUsername(req, res) {
    var username = req.query.username;

    var user = users.find(function (user) {
      return user.username === username;
    });
    res.json(user);
  }

  function findUserByCredentials(req, res) {
    var username = req.query.username;
    var password = req.query.password;

    var user = users.find(function (user) {
      return user.password === password && user.username === username;
    });
    res.json(user);
  }

  function findUserById(req, res) {
    var userID = req.params.userID;
    var user = users.find(function (user) {
      return user._id === userID;
    });
    res.json(user);
  }

  function updateUser(req, res) {
    var userID = req.params.userID;
    var updatedUser = req.body;
    for (var u in users) {
      if (users[u]._id == userID) {
        users[u].firstName = updatedUser.firstName;
        users[u].lastName = updatedUser.lastName;
        users[u].email = updatedUser.email;
        res.json(users[u]);
        return;
      }
    }
  }

  function deleteUser(req, res) {
    var userID = req.params.userID;
    for(var u in users) {
      if(users[u]._id == userID) {
        users.splice(u, 1);
        res.sendStatus(200);
        return;
      }
    }
    // if user is not present
    res.sendStatus(404);
  }

};
