module.exports = function(app, userModel) {

  app.post("/api/user", createUser);
  app.get("/api/user", findUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

  function createUser(req, res){
    var newUser = req.body;

    userModel
      .createUser(newUser)
      .then(function(user) {
        res.json(user);
      }, function (error) {
        res.sendStatus(500).send(error);
      });
  }

  function findUser(req, res) {
    var username = req.query.username;
    var password = req.query.password;

    if (username && password) {
      findUserByCredentials(req, res);
    } else if (username) {
      findUserByUsername(req, res);
    }
  }

  function findUserByUsername(req, res) {

    var username = req.query.username;

    userModel
      .findUserByUsername(username)
      .then(function (users) {
        if(users.length != 0){
          res.json(users[0]);
        }
        else{
          res.sendStatus(404);
        }
      },function (err) {
        res.sendStatus(404);
      });
  }

  function findUserByCredentials(req, res) {
    var username = req.query.username;
    var password = req.query.password;

    userModel
      .findUserByCredentials(username, password)
      .then(function(user){
        res.json(user[0]);
      });
  }

  function findUserById(req, res) {
    var userId = req.params.userId;

    userModel
      .findUserById(userId)
      .then(function(user){
        res.json(user);
      });
  }

  function updateUser(req, res) {
    var userId = req.params.userId;
    var newUser = req.body;

    userModel
      .updateUser(userId, newUser)
      .then(function(user) {
          res.json(user);
        },
        function (error) {
          res.sendStatus(404).send(error);

        })
  }

  function deleteUser(req, res) {
    var userId = req.params.userId;

    userModel
      .deleteUser(userId)
      .then(function (response) {
        res.sendStatus(200);
      },function (err) {
        res.sendStatus(404);
      });
  }
}
