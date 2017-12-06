module.exports = function(app, LeagueModel) {

  app.get("/api/league/:leagueId", findLeagueById);
  app.put("/api/user/:userId/followLeague", followLeague);
  app.put("/api/user/:userId/unfollowLeague", unfollowLeague);
  app.get("/api/user/:userID/league", findLeaguesByUser);

  function findLeagueById(req, res) {
    var leagueId = req.params.leagueId;
    LeagueModel
      .findLeagueById(leagueId)
      .then(function(league){
        res.json(league);
      })
  }

  function findLeaguesByUser(req, res) {
    var userID = req.params.userID;
    console.log('in service server fucntion start');

    LeagueModel.findAllLeaguesForUser(userID)
      .then(function (leagues) {
        console.log('in server service' + leagues);
        res.json(leagues);
      }, function (err) {
        console.log('in server service' + err);
        res.send(err);
      });
  }

  function followLeague(req, res) {
    var loggedInUserId = req.params.userId;
    var followLeagueId = req.query.followLeagueId;

    LeagueModel
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

    LeagueModel
      .unfollowLeague(loggedInUserId, unfollowLeagueId)
      .then(function(league) {
          res.json(league);
        },
        function (error) {
          res.sendStatus(404).send(error);
        });
  }
}
