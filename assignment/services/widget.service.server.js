
module.exports = function(app, WidgetModel){

  // var widgets = [
  //   { "_id": "123", "widgetType": "HEADING", "pageID": "321", "size": 2, "text": "GIZMODO"},
  //   { "_id": "234", "widgetType": "HEADING", "pageID": "321", "size": 4, "text": "Lorem ipsum"},
  //   { "_id": "345", "widgetType": "IMAGE", "pageID": "321", "width": "100%",
  //     "url": "http://lorempixel.com/400/200/"},
  //   { "_id": "456", "widgetType": "HTML", "pageID": "321", "text": "<p>Lorem ipsum</p>"},
  //   { "_id": "567", "widgetType": "HEADING", "pageID": "321", "size": 4, "text": "Lorem ipsum"},
  //   { "_id": "678", "widgetType": "YOUTUBE", "pageID": "321", "width": "100%",
  //     "url": "https://youtu.be/AM2Ivdi9c4E" },
  //   { "_id": "789", "widgetType": "HTML", "pageID": "321", "text": "<p>Lorem ipsum</p>"}
  // ];

  var multer = require('multer');
  var uploadPath= __dirname + '/../../src/assets/uploads';
  var upload = multer({dest: uploadPath});
  var fs = require("fs");

  app.post("/api/page/:pageID/widget", createWidget);
  app.get("/api/page/:pageID/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetID", findWidgetById);
  app.put("/api/widget/:widgetID", updateWidget);
  app.delete("/api/widget/:widgetID", deleteWidget);
  app.put("/api/page/:pageID/widget", updateWidgetPosition);
  app.post("/api/upload", upload.single('myFile'), uploadImage);
  app.get("/api/upload/:filename", getFile);

  function createWidget(req, res){
    var newWidget = req.body;
    var pageID = req.params.pageID;

    WidgetModel.createWidget(pageID, newWidget)
      .then(function (widget) {
        res.json(widget);
      }, function (err) {
        res.send(err);
      });
  }

  function findAllWidgetsForPage(req, res) {
    var pageID = req.params.pageID;

    WidgetModel.findAllWidgetsForPage(pageID)
      .then(function (widgets) {
        res.json(widgets);
      }, function (err) {
        res.send(err);
      });
  }

  function findWidgetById(req, res) {
    var widgetID = req.params.widgetID;

    WidgetModel.findWidgetById(widgetID)
      .then(function (widget) {
        res.json(widget);
      }, function (err) {
        res.send(err);
      });
  }

  function updateWidget (req, res) {
    var widgetID = req.params.widgetID;
    var updatedWidget = req.body;

    WidgetModel.updateWidget(widgetID, updatedWidget)
      .then(function (widget) {
        res.json(widget);
      }, function (err) {
        res.send(err);
      });
  }

  function deleteWidget(req, res) {
    var widgetID = req.params.widgetID;

    WidgetModel.deleteWidget(widgetID)
      .then(function (widget) {
        res.json(widget);
      }, function (err) {
        res.send(err);
      });
  }

  function updateWidgetPosition(req, res) {
    var pageID = req.params.pageID;
    var startIndex = parseInt(req.query.startIndex);
    var endIndex = parseInt(req.query.endIndex);

    WidgetModel.reorderWidget(pageID, startIndex, endIndex)
      .then(function (widget) {
        res.json(widget);
      }, function (err) {
        res.send(err);
      });
  }

  function uploadImage(req, res) {
    var widgetID = req.body.widgetId;
    var myFile = req.file;
    var filename = myFile.filename;

    var imageWidget = findWidgetById(req, res);

    // imageWidget.url = "/assets/uploads/" + filename;
    imageWidget.url = req.protocol + '://' + req.get('host') + "/assets/uploads/" + filename;

    WidgetModel.updateWidget(widgetID, imageWidget)
      .then(function (widget) {
        res.json(widget);
      }, function (err) {
        res.send(err);
      });

    res.redirect(req.get('referrer'));
  }

  function getFile(req, res) {
    var filename = req.params.filename;

    fs.readdir(uploadPath,  function (err, files) {
      for(var file in files) {
        if (file === filename)
          res.send(file);
      }
    });
  }

};
