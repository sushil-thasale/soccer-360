module.exports = function(app, userModel) {

  app.post("/api/user", createUser);
  app.get("/api/user", findUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

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
    /*for (var u in users) {
        if (users[u]._id == userId) {
            users[u].firstName = newUser.firstName;
            users[u].lastName = newUser.lastName;
            users[u].email = newUser.email;
            res.json(users[u]);
            return;
        }
    }*/
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
    /*for(var u in users) {
        if(users[u]._id == userId) {
            users.splice(u, 1);
            res.sendStatus(200);
            return;
        }
    }

    res.sendStatus(404);*/
    userModel
      .deleteUser(userId)
      .then(function (response) {
        res.sendStatus(200);
      },function (err) {
        res.sendStatus(404);
      });
  }

  function createUser(req, res){
    var newUser = req.body;
    /*newUser._id = (new Date()).getTime() + "";
    users.push(newUser);
    res.json(newUser);*/

    userModel
      .createUser(newUser)
      .then(function(user) {
        //console.log(user);
        res.json(user);
      }, function (error) {
        res.sendStatus(500).send(error);
      });
  }
}
