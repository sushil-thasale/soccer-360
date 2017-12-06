module.exports = function(app, leagueModel) {

  app.get("/api/league/:leagueId", findLeagueById);
  app.put("/api/user/:userId/followLeague", followLeague);
  app.put("/api/user/:userId/unfollowLeague", unfollowLeague);

  function findLeagueById(req, res) {
    var leagueId = req.params.leagueId;
    leagueModel
      .findLeagueById(leagueId)
      .then(function(league){
        res.json(league);
      })
  }

  function followLeague(req, res) {
    var loggedInUserId = req.params.userId;
    var followLeagueId = req.query.followLeagueId;

    leagueModel
      .followLeague(loggedInUserId, followLeagueId)
      .then(function(league) {
          res.json(league);
        },
        function (error) {
          res.sendStatus(404).send(error);
        });
  }

  function unfollowLeague(req, res) {
    var loggedInUserId = req.params.userId;
    var unfollowLeagueId = req.query.unfollowLeagueId;

    leagueModel
      .unfollowLeague(loggedInUserId, unfollowLeagueId)
      .then(function(league) {
          res.json(league);
        },
        function (error) {
          res.sendStatus(404).send(error);
        });
  }
}
