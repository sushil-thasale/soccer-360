module.exports = function(app, userModel) {

  // Encrypt Passwords
  var bcrypt = require("bcrypt-nodejs");

  // Configure and Initialize Passport and Passport Session Support
  var passport = require('passport');

  // Configure Passport User Serialization and Deserialization
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  // Implement Passport Local Strategy
  var LocalStrategy = require('passport-local').Strategy
  passport.use(new LocalStrategy(localStrategy));

  // Implement PassportJS Facebook Strategy
  var FacebookStrategy = require('passport-facebook').Strategy;

  var facebookConfig = {
    // clientID     : process.env.FACEBOOK_CLIENT_ID,
    // clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
    // callbackURL  : process.env.FACEBOOK_CALLBACK_URL
    clientID: 172378833356209,
    clientSecret: '1a89f6a855ec268d1cf3d70b5cdab5bb',
    // callbackURL:'http://localhost:3100/auth/facebook/callback'
    callbackURL:'https://webdev-thasale-sushil.herokuapp.com/auth/facebook/callback'
  };

  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  app.post("/api/user", createUser);
  app.get("/api/user", findUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/register', register);
  app.post('/api/loggedIn', loggedIn);
  app.put("/api/user/:userId/follow", followUser);
  app.put("/api/user/:userId/unfollow", unfollowUser);

  // route for facebook authentication and login
  app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

  // handle the callback after facebook has authenticated the user
  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: "/login"
  }), function(req, res){
    var url = "/user/" + req.user._id;
    res.redirect(url);
  });

  function followUser(req, res) {
    var loggedInUserId = req.params.userId;
    var followUserId = req.query.followUserId;

    userModel
      .followUser(loggedInUserId, followUserId)
      .then(function(user) {
          res.json(user);
        },
        function (error) {
          res.sendStatus(404).send(error);
        });
  }

  function unfollowUser(req, res) {
    var loggedInUserId = req.params.userId;
    var unfollowUserId = req.query.unfollowUserId;

    userModel
      .followUser(loggedInUserId, unfollowUserId)
      .then(function(user) {
          res.json(user);
        },
        function (error) {
          res.sendStatus(404).send(error);
        });
  }

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
      .findUserByUsername(username)
      .then(function(user){
          if(user && bcrypt.compareSync(password, user[0].password)){
            return done(null, user[0]);
          }
          return done(null, false);
        },
        function(err) {
          if (err) { return done(err); }
        })
  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logout();
    res.sendStatus(200);
  }

  function register (req, res) {
    var user = req.body;
    // Encrypt Passwords on Registration
    user.password = bcrypt.hashSync(user.password);
    // return userModel.createUser(user);

    userModel
      .createUser(user)
      .then(
        function(user){
          if(user){
            req.login(user, function(err) {
              if(err) {
                res.status(400).send(err);
              } else {
                res.json(user);
              }
            });
          }
        }
      );
  }

  function loggedIn(req, res) {
    if(req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.send('0');
    }
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel
      .findUserByFacebookId(profile.id)
      .then(function(user) {
          if(user) {
            return done(null, user);
          }
          else {
            var names = profile.displayName.split(" ");
            var newFacebookUser = {
              firstName:  names[0],
              lastName:  names[1],
              facebook: {
                id:    profile.id,
                token: token
              },
              email: profile.emails[0].value,
              username: profile.emails[0].value
            };
            userModel
              .createUser(newFacebookUser)
              .then(function (user) {
                return done(null, user);
              });
          }
        },
        function(err) {
          if (err) { return done(err); }
        });
  }
}
