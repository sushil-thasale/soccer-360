module.exports = function () {

  var model = null;
  var mongoose = require("mongoose");
  var PageSchema = require('./page.schema.server')();
  var PageModel = mongoose.model('PageModel', PageSchema);

  var api = {
    createPage: createPage,
    findPageById: findPageById,
    findAllPagesForWebsite: findAllPagesForWebsite,
    updatePage: updatePage,
    deletePage: deletePage,
    deletePageAndChildren: deletePageAndChildren,
    setModel: setModel
  }

  function createPage(websiteId, newPage) {
    return PageModel
      .create(newPage)
      .then(function (page) {
        return model.websiteModel
          .findWebsiteById(websiteId)
          .then(function (website) {
            page.websiteID = website._id;
            website.pages.push(page._id);
            page.save();
            website.save();
            return page;
          }, function (err) {
            return err;
          })
      }, function (err) {
        return err;
      })
  }

  function findPageById(pageId){
    return PageModel.findById(pageId);
  }

  function findAllPagesForWebsite(websiteId) {
    return PageModel.find({"websiteID": websiteId});
  }

  function updatePage(pageId, newPage){
    return PageModel.update({_id:pageId},{$set: newPage});
  }

  function deletePage(pageId){
    return PageModel
      .findById(pageId).populate('websiteID')
      .then(function(page) {
        page.websiteID.pages.splice(page.websiteID.pages.indexOf(pageId), 1);
        page.websiteID.save();
        return deletePageAndChildren(pageId);
      }, function(err){
        return err;
      })
  }

  function deletePageAndChildren(pageId){
    return PageModel
      .findById(pageId)
      .then(function(page) {
        var pageWidgets = page.widgets;
        return deleteWidgetsOfPage(pageWidgets, pageId);
      }, function(err){
        return err;
      })
  }

  function deleteWidgetsOfPage(pageWidgets, pageId){
    if(pageWidgets.length == 0){
      return PageModel.remove({_id: pageId})
        .then(function(response) {
          return response;
        }, function (err) {
          return err;
        })
    }

    return model.widgetModel.deleteWidgetOfPage(wdgs.shift())
      .then(function (response) {
        if(response.result.n == 1 && response.result.ok == 1){
          return deleteWidgetsOfPage(wdgs, pageId);
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
