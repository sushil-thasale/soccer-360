module.exports = function () {

  // connection string for local testing
  var connectionString = 'mongodb://127.0.0.1:27017/WebAppMakerDB';

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






  var UserModel = require('./user/user.model.server')();
  var WebsiteModel = require('./website/website.model.server')();
  var PageModel = require('./page/page.model.server')();
  var WidgetModel = require('./widget/widget.model.server')();

  var model = {
    UserModel:    UserModel,
    WebsiteModel: WebsiteModel,
    PageModel:    PageModel,
    WidgetModel:  WidgetModel
  };

  UserModel.setModel(model);
  WebsiteModel.setModel(model);
  PageModel.setModel(model);
  WidgetModel.setModel(model);

  return model;
};
