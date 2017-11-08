module.exports = function () {

  var model = null;
  var mongoose = require('mongoose');
  var PageSchema = require('./page.schema.server')();
  var PageModel = mongoose.model('PageModel', PageSchema);

  var api = {
    "findAllPagesForWebsite": findAllPagesForWebsite,
    "createPage": createPage,
    "findPageById": findPageById,
    "updatePage": updatePage,
    "deletePage": deletePage,
    "setModel": setModel
  };

  function createPage(websiteId, page) {
    return PageModel
      .create(page)
      .then(function (page) {
        return model.WebsiteModel
          .findWebsiteById(websiteId)
          .then(function (website) {
            website.pages.push(page._id);
            page.save();
            website.save();
          }, function (err) {
            return err;
          })
      }, function (err) {
        return err;
      });
  }

  function findPageById(pageId) {
    return PageModel.findById(pageId);
  }

  function findAllPagesForWebsite(websiteId) {
    return PageModel.find({"websiteId": websiteId});
  }

  function updatePage(pageId, updatedPage) {
    return PageModel.update(
      {_id:pageId},
      {$set:updatedPage});
  }

  function deletePage(pageId) {
    PageModel
      .findById(pageId)
      .then(function (page) {
        deletePageWidgets(page.widgets)
      });

    return PageModel.remove({_id:pageId});
  }

  function deletePageWidgets(widgets) {
    for(var widget in widgets) {
      model.WidgetModel.deleteWidget(widget);
    }
  }

  function setModel(_model) {
    this.model = _model;
  }

  return api;
};
