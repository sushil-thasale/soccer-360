module.exports = function (app, UserModel) {

  // var users = [
  //   {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder",email: "alice@abc.com"},
  //   {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@abc.com"},
  //   {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@abc.com"},
  //   {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: "jose@abc.com"}
  // ];

  app.post("/api/user", createUser);
  app.get("/api/user", findUser);
  // app.get("/api/user", findUserByCredentials);
  app.get("/api/user/:userID", findUserById);
  app.put("/api/user/:userID", updateUser);
  app.delete("/api/user/:userID", deleteUser);

  function createUser(req, res) {
    var newUser = req.body;

    UserModel.createUser(newUser)
      .then(function (user) {
        res.json(user);
      }, function (err) {
        res.send(err);
      });
  }

  function findUser(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];

    if (username && password) {
      findUserByCredentials(req, res);
    }
    else if (username) {
      findUserByUsername(req, res);
    }
  }

  function findUserByUsername(req, res) {
    var username = req.query['username'];

    UserModel.findUserByUsername(username)
      .then(function (user) {
        console.log('findUserByUsername server ' + user);
        res.json(user);
      }, function (err) {
        res.send(err);
      });
  }

  function findUserByCredentials(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];

    UserModel.findUserByCredentials(username, password)
      .then(function (user) {
        console.log("in user service server " + user);
        res.json(user);
      }, function (err) {
        console.log("in user service err " + err);
        res.send(err);
      });
  }

  function findUserById(req, res) {
    var userID = req.params.userID;

    UserModel.findUserById(userID)
      .then(function (user) {
        console.log("findUserById in user service server " + user);
        res.json(user);
      }, function (err) {
        res.send(err);
      });
  }

  function updateUser(req, res) {
    var userID = req.params.userID;
    var updatedUser = req.body;

    UserModel.updateUser(userID, updatedUser)
      .then(function (user) {
        console.log("updateUser in user service server " + user.username);
        res.json(user);
      }, function (err) {
        res.send(err);
      });
  }

  function deleteUser(req, res) {
    var userID = req.params.userID;

    UserModel.deleteUser(userID)
      .then(function (user) {
        res.json(user);
      }, function (err) {
        res.send(err);
      });
  }

};
