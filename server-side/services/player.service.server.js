module.exports = function(app, PlayerModel) {

  app.get("/api/player/:playerId", findPlayerById);
  app.put("/api/user/:userId/followPlayer", followPlayer);
  app.put("/api/user/:userId/unfollowPlayer", unfollowPlayer);
  app.get("/api/user/:userId/player/:keyword", searchPlayersByName);
  app.get("/api/user/:userId/player", findPlayersByUser);

  function searchPlayersByName(req, res) {
    var keyword = req.params.keyword;
    PlayerModel
      .searchPlayersByName(keyword)
      .then(function(players){
        res.json(players);
      });
  }

  function findPlayersByUser(req, res) {
    var userID = req.params.userId;

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
    var loggedInUserId = req.params.userId;
    var followPlayerId = req.body.playerId;

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
    var loggedInUserId = req.params.userId;
    var unfollowPlayerId = req.body.playerId;

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
