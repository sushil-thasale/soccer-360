module.exports = function () {

  var model = null;
  var mongoose = require("mongoose");
  var WidgetSchema = require('./widget.schema.server')();
  var WidgetModel = mongoose.model('WidgetModel', WidgetSchema);

  var api = {
    "createWidget": createWidget,
    "findWidgetById": findWidgetById,
    "findAllWidgetsForPage": findAllWidgetsForPage,
    "updateWidget": updateWidget,
    "deleteWidgetOfPage": deleteWidgetOfPage,
    "deleteWidget": deleteWidget,
    "reorderWidget": reorderWidget,
    "setModel": setModel
  };

  function createWidget(pageId, newWidget){
    return WidgetModel
      .create(newWidget)
      .then(function(widget) {
        return model.pageModel
          .findPageById(pageId)
          .then(function (page) {
            widget.pageID = page;
            widget.pageID.widgets.push(widget._id);
            widget.save();
            widget.pageID.save();
            return widget;
          }, function (err) {
            return err;
          })
      }, function(err){
        return err;
      })
  }

  function findWidgetById(widgetId){
    return WidgetModel.findById(widgetId);
  }

  function findAllWidgetsForPage(pageId){
    return model.pageModel
      .findPageById(pageId)
      .then(function(page) {
        var pageWidgets = page.widgets;
        var widgets = [];
        var count = page.widgets.length;
        return getAllWidgets(count, pageWidgets, widgets);
      }, function(err){
        return err;
      })
  }

  function getAllWidgets(count, pageWidgets, widgets){
    if(count==0){
      return widgets;
    }

    return WidgetModel.findById(pageWidgets.shift())
      .then(function(widget) {
        widgets.push(widget);
        count--;
        return getAllWidgets(count, pageWidgets, widgets);
      }, function(err){
        return err;
      })
  }

  function updateWidget(widgetId, newWidget){
    return WidgetModel.update({_id:widgetId},{$set: newWidget});
  }


  function deleteWidget(widgetId){
    return WidgetModel.findById(widgetId).populate('pageID')
      .exec()
      .then(function(widget) {
        widget.pageID.widgets.splice(widget.pageID.widgets.indexOf(widgetId), 1);
        widget.pageID.save();
        return WidgetModel.remove({_id: widgetId});
      }, function(err){
        return err;
      })

  }

  function deleteWidgetOfPage(widgetId) {
    return WidgetModel.findById(widgetId)
      .then(function (widget) {
        return WidgetModel.remove({_id: widgetId});
      }, function (err) {
        return err;
      });
  }

  function reorderWidget(pageId, start, end){
    return model.pageModel
      .findPageById(pageId)
      .then(function (page) {
        page.widgets.splice(end, 0, page.widgets.splice(start, 1)[0]);
        page.save();
        return page.widgets;
      }, function (err) {
        return err;
      });
  }

  function setModel(_model) {
    model = _model;
  }

  return api;
}
