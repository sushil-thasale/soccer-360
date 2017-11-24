module.exports = function(app, userModel) {

  var passport = require('passport');

  app.post("/api/user", createUser);
  app.get("/api/user", findUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  app.post  ('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);

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

  // Configure Passport User Serialization and Deserialization
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

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

  // Implement Passport Local Strategy
  var LocalStrategy = require('passport-local').strategy;
  passport.use(new LocalStrategy(localStrategy));

  function localStrategy(username, password, done) {
    userModel
      .findUserByCredentials(username, password)
      .then(
        function(user) {
          if(user.username === username && user.password === password) {
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

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logout();
    res.send(200);
  }
}
