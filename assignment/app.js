module.exports = function(app) {

  var models = require('./model/models.server')();
  require('./services/user.service.server')(app, models.UserModel);
  require('./services/website.service.server')(app, models.WebsiteModel);
  require("./services/page.service.server.js")(app, models.PageModel);
  require("./services/widget.service.server.js")(app, models.WidgetModel);
}
