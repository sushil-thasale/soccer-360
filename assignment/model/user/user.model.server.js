module.exports = function () {

  var model = null;
  var mongoose = require('mongoose');
  var UserSchema = require('./user.schema.server');
  var UserModel = mongoose.model('UserModel', UserSchema);

  var api = {
    "createUser": createUser,
    "findUserById": findUserById,
    "findUserByUsername": findUserByUsername,
    "findUserByCredentials": findUserByCredentials,
    "updateUser": updateUser,
    "deleteUser":deleteUser,
    "setModel": setModel
  };

  function createUser(user) {
    return UserModel.create(user);
  }

  function findUserById(userId) {
    return UserModel.findById(userId);
  }

  function findUserByUsername(username) {
    return UserModel.find({
      "username":username
    });
  }

  function findUserByCredentials(username, password) {
    return UserModel.find({
      "username":username,
      "password":password
    });
  }

  function updateUser(userId, updatedUser) {
    return UserModel.update(
      {_id:userId},
      {$set:updatedUser});
  }

  function deleteUser(userId) {
    UserModel
      .findById(userId)
      .then(function (user) {
        deleteUserWebsites(user.websites)
      });

    return UserModel.remove({_id:userId});
  }

  function deleteUserWebsites(websites) {
    for(var website in websites) {
      model.WebsiteModel.deleteWebsite(website);
    }
  }

  function setModel(_model) {
    model = _model;
  }

  return api;
};
