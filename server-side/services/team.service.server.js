module.exports = function(app, TeamModel) {

  app.get("/api/team/:teamId", findTeamById);
  app.put("/api/user/:userId/followTeam", followTeam);
  app.put("/api/user/:userId/unfollowTeam", unfollowTeam);
  app.get("/api/user/:userID/team", findTeamsByUser);

  function findTeamById(req, res) {
    var teamId = req.params.teamID;
    TeamModel
      .findTeamById(teamId)
      .then(function(team){
        res.json(team);
      })
  }

  function findTeamsByUser(req, res) {
    var userID = req.params.userID;

    TeamModel.findAllTeamsForUser(userID)
      .then(function (teams) {
        res.json(teams);
      }, function (err) {
        res.send(err);
      });
  }

  function followTeam(req, res) {
    var loggedInUserId = req.params.userID;
    var followTeamId = req.query.followTeamId;

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
    var loggedInUserId = req.params.userID;
    var unfollowTeamId = req.query.unfollowTeamId;

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
