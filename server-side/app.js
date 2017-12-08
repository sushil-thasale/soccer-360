module.exports = function(app) {

  var models = require('./model/models.server')();
  require('./services/user.service.server')(app, models.userModel);
  require("./services/league.service.server")(app, models.leagueModel);
  require("./services/team.service.server")(app, models.teamModel);
  require("./services/player.service.server")(app, models.playerModel);
  // require("./services/startup.service.server")(app, models);
}
