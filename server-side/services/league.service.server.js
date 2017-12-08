module.exports = function(app, LeagueModel) {

  app.get("/api/league/:leagueId", findLeagueById);
  app.put("/api/user/:userId/followLeague", followLeague);
  app.put("/api/user/:userId/unfollowLeague", unfollowLeague);
  app.get("/api/user/:userId/league/:keyword", searchLeaguesByName);
  app.get("/api/user/:userId/league", findLeaguesByUser);

  function searchLeaguesByName(req, res) {
    var keyword = req.params.keyword;
    LeagueModel
      .searchLeaguesByName(keyword)
      .then(function(leagues){
        res.json(leagues);
      });
  }

  function findLeagueById(req, res) {
    var leagueId = req.params.leagueId;
    LeagueModel
      .findLeagueById(leagueId)
      .then(function(league){
        res.json(league);
      });
  }

  function findLeaguesByUser(req, res) {
    var userID = req.params.userId;

    LeagueModel.findAllLeaguesForUser(userID)
      .then(function (leagues) {
        res.json(leagues);
      }, function (err) {
        res.send(err);
      });
  }

  function followLeague(req, res) {
    var loggedInUserId = req.params.userId;
    var followLeagueId = req.body.leagueId;

    LeagueModel
      .followLeague(loggedInUserId, followLeagueId)
      .then(function(league) {
          console.log(league);
          res.json(league);
        },
        function (error) {
          res.sendStatus(404).send(error);
        });
  }

  function unfollowLeague(req, res) {
    var loggedInUserId = req.params.userId;
    var unfollowLeagueId = req.body.leagueId;

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
