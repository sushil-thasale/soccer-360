module.exports = function() {

  var model = null;
  var mongoose = require("mongoose");
  var WebsiteSchema = require('./website.schema.server')();
  var WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);

  var api = {
    createWebsiteForUser: createWebsiteForUser,
    findWebsiteById: findWebsiteById,
    findAllWebsitesForUser: findAllWebsitesForUser,
    updateWebsite: updateWebsite,
    deleteWebsite: deleteWebsite,
    deleteWebsiteHelper: deleteWebsiteHelper,
    setModel: setModel
  }

  function findAllWebsitesForUser(userId) {
    return WebsiteModel.find({"developerId": userId});
  }

  function createWebsiteForUser(userId, website) {
    return WebsiteModel
      .create(website)
      .then(function (website) {
        return model.userModel
          .findUserById(userId)
          .then(function (user) {
            website.developerId = user._id;
            user.websites.push(website._id);
            website.save();
            user.save();
            return website;

          }, function (err) {
            return err;
          })
      }, function (err) {
        return err;
      })
  }

  function findWebsiteById(websiteId){
    return WebsiteModel.findById(websiteId);
  }

  function updateWebsite(websiteId, newWebsite) {
    return WebsiteModel.update({_id: websiteId}, {$set: newWebsite});
  }

  function deleteWebsite(websiteId){
    return WebsiteModel
      .findById(websiteId).populate('developerId')
      .then(function(website) {
        website.developerId.websites.splice(website.developerId.websites.indexOf(websiteId), 1);
        website.developerId.save();
        return deleteWebsiteHelper(websiteId);
      }, function(err) {
        return err;
      })
  }

  function deleteWebsiteHelper(websiteId){
    return WebsiteModel.findById(websiteId).select({'pages':1})
      .then(function (website) {
        var pgs = website.pages;
        return deleteWebsiteAndPages(pgs, websiteId);
      }, function (err) {
        return err;
      });
  }

  function deleteWebsiteAndPages(pgs, websiteId) {
    if(pgs.length == 0){
      return WebsiteModel.remove({_id: websiteId})
        .then(function (response) {
          return response;
        }, function (err) {
          return err;
        });
    }

    return model.pageModel.deletePageHelper(pgs.shift())
      .then(function (response) {
        if(response.result.n == 1 && response.result.ok == 1){
          return deleteWebsiteAndPages(pgs, websiteId);
        }
      }, function (err) {
        return err;
      });
  }

  function setModel(_model) {
    model = _model;
  }

  return api;
};
