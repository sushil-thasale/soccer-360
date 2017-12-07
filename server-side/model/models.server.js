module.exports = function () {

  var userModel       = require("./user/user.model.server")();
  var websiteModel    = require("./website/website.model.server")();
  var pageModel       = require("./page/page.model.server")();
  var widgetModel     = require("./widget/widget.model.server")();
  var leagueModel     = require("./league/league.model.server")();
  var teamModel     = require("./team/team.model.server")();
  var playerModel     = require("./player/player.model.server")();

  var model = {
    userModel: userModel,
    websiteModel: websiteModel,
    pageModel:pageModel,
    widgetModel:widgetModel,
    leagueModel: leagueModel,
    teamModel: teamModel,
    playerModel: playerModel
  };

  userModel.setModel(model);
  websiteModel.setModel(model);
  pageModel.setModel(model);
  widgetModel.setModel(model);
  leagueModel.setModel(model);
  teamModel.setModel(model);
  playerModel.setModel(model);

  return model;
};
