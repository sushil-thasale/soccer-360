module.exports = function(app, PlayerModel) {

  app.get("/api/player/:playerId", findPlayerById);
  app.put("/api/user/:userId/followPlayer", followPlayer);
  app.put("/api/user/:userId/unfollowPlayer", unfollowPlayer);
  app.get("/api/user/:userID/player", findPlayersByUser);

  function findPlayersByUser(req, res) {
    var userID = req.params.userID;

    PlayerModel.findAllPlayersForUser(userID)
      .then(function (players) {
        res.json(players);
      }, function (err) {
        res.send(err);
      });
  }

  function findPlayerById(req, res) {
    var playerId = req.params.playerId;
    PlayerModel
      .findPlayerById(playerId)
      .then(function(player){
        res.json(player);
      })
  }

  function followPlayer(req, res) {
    var loggedInUserId = req.params.userID;
    var followPlayerId = req.query.followPlayerId;

    PlayerModel
      .followPlayer(loggedInUserId, followPlayerId)
      .then(function(player) {
          res.json(player);
        },
        function (error) {
          res.sendStatus(404).send(error);
        });
  }

  function unfollowPlayer(req, res) {
    var loggedInUserId = req.params.userID;
    var unfollowPlayerId = req.query.unfollowPlayerId;

    PlayerModel
      .unfollowPlayer(loggedInUserId, unfollowPlayerId)
      .then(function(player) {
          res.json(player);
        },
        function (error) {
          res.sendStatus(404).send(error);
        });
  }
}
