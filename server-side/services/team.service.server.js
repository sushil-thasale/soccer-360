module.exports = function(app, TeamModel) {

  app.get("/api/team/:teamId", findTeamById);
  app.put("/api/user/:userId/followTeam", followTeam);
  app.put("/api/user/:userId/unfollowTeam", unfollowTeam);
  app.get("/api/user/:userId/team/:keyword", searchTeamsByName);
  app.get("/api/user/:userId/team", findTeamsByUser);

  function searchTeamsByName(req, res) {
    var keyword = req.params.keyword;
    TeamModel
      .searchTeamsByName(keyword)
      .then(function(teams){
        res.json(teams);
      });
  }

  function findTeamById(req, res) {
    var teamId = req.params.teamId;
    TeamModel
      .findTeamById(teamId)
      .then(function(team){
        res.json(team);
      })
  }

  function findTeamsByUser(req, res) {
    var userID = req.params.userId;

    TeamModel.findAllTeamsForUser(userID)
      .then(function (teams) {
        res.json(teams);
      }, function (err) {
        res.send(err);
      });
  }

  function followTeam(req, res) {
    var loggedInUserId = req.params.userId;
    var followTeamId = req.body.teamId;

    TeamModel
      .followTeam(loggedInUserId, followTeamId)
      .then(function(team) {
          res.json(team);
        },
        function (error) {
          res.sendStatus(404).send(error);
        });
  }

  function unfollowTeam(req, res) {
    var loggedInUserId = req.params.userId;
    var unfollowTeamId = req.body.teamId;

    TeamModel
      .unfollowTeam(loggedInUserId, unfollowTeamId)
      .then(function(team) {
          res.json(team);
        },
        function (error) {
          res.sendStatus(404).send(error);
        });
  }
}
