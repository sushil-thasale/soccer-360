module.exports = function(app) {

  // connection string for local testing
  var connectionString = 'mongodb://127.0.0.1:27017/newWebApp2';

  // logic to host app on heroku
  if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
    var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
    var password = process.env.MLAB_PASSWORD_WEBDEV;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds135534.mlab.com:35534/heroku_451qtmbx'; // use yours
  }

  // updates to mongoose
  var mongoose = require("mongoose");
  mongoose.connect(connectionString, {
    useMongoClient: true
  });

  var models = require('./model/models.server')();
  require('./services/user.service.server')(app, models.userModel);
  require('./services/website.service.server')(app, models.websiteModel);
  require("./services/page.service.server.js")(app, models.pageModel);
  require("./services/widget.service.server.js")(app, models.widgetModel);
}
