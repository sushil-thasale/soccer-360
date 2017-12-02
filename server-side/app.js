module.exports = function(app) {

  var models = require('./model/models.server')();
  require('./services/user.service.server')(app, models.userModel);
  require('./services/website.service.server')(app, models.websiteModel);
  require("./services/page.service.server.js")(app, models.pageModel);
  require("./services/widget.service.server.js")(app, models.widgetModel);
}
