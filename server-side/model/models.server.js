module.exports = function () {

  var userModel       = require("./user/user.model.server")();
  var leagueModel     = require("./league/league.model.server")();
  var teamModel     = require("./team/team.model.server")();
  var playerModel     = require("./player/player.model.server")();

  var model = {
    userModel: userModel,
    leagueModel: leagueModel,
    teamModel: teamModel,
    playerModel: playerModel
  };

  userModel.setModel(model);
  leagueModel.setModel(model);
  teamModel.setModel(model);
  playerModel.setModel(model);

  return model;
};
