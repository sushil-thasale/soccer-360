module.exports = function(app, teamModel) {

  app.get("/api/team/:teamId", findTeamById);
  app.put("/api/user/:userId/followTeam", followTeam);
  app.put("/api/user/:userId/unfollowTeam", unfollowTeam);

  function findTeamById(req, res) {
    var teamId = req.params.teamId;
    teamModel
      .findTeamById(teamId)
      .then(function(team){
        res.json(team);
      })
  }

  function followTeam(req, res) {
    var loggedInUserId = req.params.userId;
    var followTeamId = req.query.followTeamId;

    teamModel
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
    var unfollowTeamId = req.query.unfollowTeamId;

    teamModel
      .unfollowTeam(loggedInUserId, unfollowTeamId)
      .then(function(team) {
          res.json(team);
        },
        function (error) {
          res.sendStatus(404).send(error);
        });
  }
}
