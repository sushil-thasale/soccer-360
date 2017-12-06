module.exports = function(app, playerModel) {

  app.get("/api/player/:playerId", findPlayerById);
  app.put("/api/user/:userId/followPlayer", followPlayer);
  app.put("/api/user/:userId/unfollowPlayer", unfollowPlayer);

  function findPlayerById(req, res) {
    var playerId = req.params.playerId;
    playerModel
      .findPlayerById(playerId)
      .then(function(player){
        res.json(player);
      })
  }

  function followPlayer(req, res) {
    var loggedInUserId = req.params.userId;
    var followPlayerId = req.query.followPlayerId;

    playerModel
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
    var unfollowPlayerId = req.query.unfollowPlayerId;

    playerModel
      .unfollowPlayer(loggedInUserId, unfollowPlayerId)
      .then(function(player) {
          res.json(player);
        },
        function (error) {
          res.sendStatus(404).send(error);
        });
  }
}
