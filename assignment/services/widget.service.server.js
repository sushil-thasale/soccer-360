
module.exports = function(app){

  var widgets = [
    { "_id": "123", "widgetType": "HEADING", "pageID": "321", "size": 2, "text": "GIZMODO"},
    { "_id": "234", "widgetType": "HEADING", "pageID": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "345", "widgetType": "IMAGE", "pageID": "321", "width": "100%",
      "url": "http://lorempixel.com/400/200/"},
    { "_id": "456", "widgetType": "HTML", "pageID": "321", "text": "<p>Lorem ipsum</p>"},
    { "_id": "567", "widgetType": "HEADING", "pageID": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "678", "widgetType": "YOUTUBE", "pageID": "321", "width": "100%",
      "url": "https://youtu.be/AM2Ivdi9c4E" },
    { "_id": "789", "widgetType": "HTML", "pageID": "321", "text": "<p>Lorem ipsum</p>"}
  ];

  var multer = require('multer');
  var uploadPath= __dirname + '/../../src/assets/uploads';
  var upload = multer({dest: uploadPath});

  app.post("/api/page/:pageID/widget", createWidget);
  app.get("/api/page/:pageID/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetID", findWidgetById);
  app.put("/api/widget/:widgetID", updateWidget);
  app.delete("/api/widget/:widgetID", deleteWidget);
  app.put("/api/page/:pageID/widget", updateWidgetPosition);
  app.post("/api/upload", upload.single('myFile'), uploadImage);

  function createWidget(req, res){
    var newWidget = req.body;
    newWidget._id = "" + (new Date()).getTime();
    newWidget.pageID = req.params.pageID;
    widgets.push(newWidget);
    res.json(newWidget);
  }

  function findAllWidgetsForPage(req, res) {
    var pageID = req.params.pageID;
    var pageWidgets = [];
    for (var w in widgets) {
      if(widgets[w].pageID === pageID) {
        pageWidgets.push(widgets[w]);
      }
    }
    res.json(pageWidgets);
  }

  function findWidgetById(req, res) {
    var widgetID = req.params.widgetID;
    var widget = widgets.find(function (widget) {
      return widget._id === widgetID;
    });
    res.json(widget);
  }

  function updateWidget (req, res) {
    var widgetID = req.params.widgetID;
    var updatedWidget = req.body;
    for (var i in widgets) {
      if (widgets[i]._id === widgetID) {
        if (widgets[i].widgetType === 'IMAGE' || widgets[i].widgetType === 'YOUTUBE') {
          widgets[i].width = updatedWidget.width;
          widgets[i].url = updatedWidget.url;
          res.json(widgets[i]);
          return;
        } else if (widgets[i].widgetType === 'HEADING') {
          widgets[i].text = updatedWidget.text;
          widgets[i].size = updatedWidget.size;
          res.json(widgets[i]);
          return;
        } else if (widgets[i].widgetType === 'HTML') {
          widgets[i].text = updatedWidget.text;
          res.json(widgets[i]);
          return;
        }
      }
    }
    return null;
  }

  function deleteWidget(req, res) {
    var widgetID = req.params.widgetID;
    for(var w in widgets) {
      if(widgets[w]._id === widgetID) {
        widgets.splice(w, 1);
        res.sendStatus(200);
        return;
      }
    }
    res.sendStatus(404);
  }

  function updateWidgetPosition(req, res) {
    var pageID = req.params.pageID;
    var startIndex = parseInt(req.query.startIndex);
    var endIndex = parseInt(req.query.endIndex);

    // find all widgets belonging to that page
    var pageWidgets = widgets.filter(function (w) {
      return w.pageID === pageID;
    });

    // find all the other widgets
    var nonPageWidgets = widgets.filter(function (w) {
      return pageWidgets.indexOf(w) < 0;
    });

    // change indexing of page widgets
    var widgetAtStart = pageWidgets[startIndex];
    pageWidgets.splice(startIndex, 1);
    pageWidgets.splice(endIndex, 0, widgetAtStart);

    widgets = nonPageWidgets.concat(pageWidgets);
    res.json(pageWidgets);
    return;
  }

  function uploadImage(req, res) {
    var widgetID      = req.body.widgetId;
    var myFile        = req.file;
    var filename      = myFile.filename;

    imageWidget = widgets.find(function (widget) {
      return widget._id === widgetID;
    });

    // imageWidget.url = req.protocol + '://' + req.get('host') + '/uploads/' + filename;

    imageWidget.url = '/uploads/'+filename;

    res.redirect(req.get('referrer'));
  }
};
