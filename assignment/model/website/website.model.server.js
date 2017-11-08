module.exports = function () {

  var model = null;
  var mongoose = require('mongoose');
  var WebsiteSchema = require('./website.schema.server')();
  var WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);

  var api = {
    "findAllWebsitesForUser": findAllWebsitesForUser,
    "createWebsiteForUser": createWebsiteForUser,
    "findWebsiteById": findWebsiteById,
    "updateWebsite": updateWebsite,
    "deleteWebsite": deleteWebsite,
    "setModel": setModel
  };

  function createWebsiteForUser(userId, newWebsite) {
    return WebsiteModel
      .create(newWebsite)
      .then(function (website) {
        return model.UserModel
          .findUserById(userId)
          .then(function (user) {
            user.websites.push(website._id);
            user.save();
            website.save();
          }, function (err) {
            return err;
          })
      }, function (err) {
        return err;
      });
  }

  function findWebsiteById(websiteId) {
    return WebsiteModel.findById(websiteId);
  }

  function findAllWebsitesForUser(developerId) {
    return WebsiteModel.find({"developerId": developerId},
      function (err, doc) {
        console.log(err);
        console.log(doc);
      });
  }

  function updateWebsite(websiteId, updatedWebsite) {
    return WebsiteModel.update(
      {_id:websiteId},
      {$set:updatedWebsite});
  }

  function deleteWebsite(websiteId) {
    WebsiteModel
      .findById(websiteId)
      .then(function (website) {
        deleteWebsitePages(website.pages)
      });

    return WebsiteModel.remove({_id:websiteId});
  }

  function deleteWebsitePages(pages) {
    for(var page in pages) {
      model.PageModel.deletePage(page);
    }
  }

  function setModel(_model) {
    model = _model;
  }

  return api;
};
