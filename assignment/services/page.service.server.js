
module.exports = function(app) {

  var pages = [
    { "_id": "321", "name": "Post 1", "websiteID": "456", "description": "Lorem1" },
    { "_id": "432", "name": "Post 2", "websiteID": "456", "description": "Lorem2" },
    { "_id": "543", "name": "Post 3", "websiteID": "456", "description": "Lorem3" }
  ];

  app.post("/api/website/:websiteID/page", createPage);
  app.get("/api/website/:websiteID/page", findPagesByWebsiteId);
  app.get("/api/page/:pageID", findPageById);
  app.put("/api/page/:pageID", updatePage);
  app.delete("/api/page/:pageID", deletePage);

  function createPage(req, res){
    var newPage = req.body;
    newPage._id = "" + (new Date()).getTime();
    newPage.websiteID = req.params.websiteID;
    pages.push(newPage);
    res.json(newPage);
  }

  function findPagesByWebsiteId(req, res) {
    var websiteID = req.params.websiteID;
    var websitePages = [];
    for (var p in pages) {
      if (pages[p].websiteID === websiteID) {
        websitePages.push(pages[p]);
      }
    }
    res.json(websitePages);
  }

  function findPageById(req, res) {
    var pageID = req.params.pageID;
    var page = pages.find(function (page) {
      return page._id === pageID;
    });
    res.json(page);
  }

  function updatePage(req, res) {
    var pageID = req.params.pageID;
    var updatedPage = req.body;

    for (var p in pages) {
      if (pages[p]._id === pageID) {
        pages[p].name = updatedPage.name;
        pages[p].description = updatedPage.description;
        res.json(pages[p]);
        return;
      }
    }
  }

  function deletePage(req, res) {
    var pageID = req.params.pageID;
    for(var p in pages) {
      if(pages[p]._id === pageID) {
        pages.splice(p, 1);
        res.sendStatus(200);
        return;
      }
    }
    res.sendStatus(404);
  }

};
