module.exports = function () {

  var model = null;
  var mongoose = require('mongoose');
  var WidgetSchema = require('./widget.schema.server')();
  var WidgetModel = mongoose.model('WidgetModel', WidgetSchema);

  var api = {
    "createWidget": createWidget,
    "findWidgetById": findWidgetById,
    "findAllWidgetsForPage": findAllWidgetsForPage,
    "updateWidget": updateWidget,
    "deleteWidget": deleteWidget,
    "reorderWidget": reorderWidget,
    "setModel": setModel
  };

  function createWidget(pageId, newWidget) {

    // return WidgetModel
    //   .create(newWidget)
    //   .then(function (widget) {
    //     return model.PageModel
    //       .findPageById(pageId)
    //       .then(function (page) {
    //         page.widgets.push(widget._id);
    //         page.save();
    //         widget.save();
    //       }, function (err) {
    //         return err;
    //       })
    //   }, function (err) {
    //     return err;
    //   });

    return WidgetModel.create(newWidget, function (err, doc) {
      console.log('createWidget error ' + err);
      console.log('createWidget doc ' + doc);
    });
  }

  function findWidgetById(widgetId) {
    return WidgetModel.findById(widgetId);
  }

  function findAllWidgetsForPage(pageId) {
    return WidgetModel.find({"pageID": pageId});
  }

  function updateWidget(widgetId, updatedWidget) {
    return WidgetModel.update(
      {_id:widgetId},
      {$set:updatedWidget});
  }

  function deleteWidget(widgetId) {
    return WidgetModel.remove({'_id': widgetId});
  }

  function reorderWidget(pageId, startIndex, endIndex) {
    return model.PageModel
      .findPageById(pageId)
      .then(function (page) {
        page.widgets.splice(endIndex, 0,
                            page.widgets.splice(startIndex)[0]);
        page.save();
        return 200;
      }, function (err) {
        return err;
      });
  }

  function setModel(_model) {
    this.model = _model;
  }

  return api;
};
