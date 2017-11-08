module.exports = function () {

  // connection string for local testing
  var connectionString = 'mongodb://127.0.0.1:27017/newWebApp';

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

  var userModel       = require("./user/user.model.server")();
  var websiteModel    = require("./website/website.model.server")();
  var pageModel       = require("./page/page.model.server")();
  var widgetModel     = require("./widget/widget.model.server")();

  var model = {
    userModel: userModel,
    websiteModel: websiteModel,
    pageModel:pageModel,
    widgetModel:widgetModel
  };

  userModel.setModel(model);
  websiteModel.setModel(model);
  pageModel.setModel(model);
  widgetModel.setModel(model);

  return model;
};
