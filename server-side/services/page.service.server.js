
module.exports = function(app, PageModel) {

  app.post("/api/website/:websiteID/page", createPage);
  app.get("/api/website/:websiteID/page", findPagesByWebsiteId);
  app.get("/api/page/:pageID", findPageById);
  app.put("/api/page/:pageID", updatePage);
  app.delete("/api/page/:pageID", deletePage);

  function createPage(req, res){
    var websiteId = req.params.websiteID;
    var newPage = req.body;

    PageModel.createPage(websiteId, newPage)
      .then(function (page) {
        res.json(page);
      }, function (err) {
        res.send(err);
      });
  }

  function findPagesByWebsiteId(req, res) {
    var websiteID = req.params.websiteID;

    PageModel.findAllPagesForWebsite(websiteID)
      .then(function (pages) {
        res.json(pages);
      }, function (err) {
        res.send(err);
      });
  }

  function findPageById(req, res) {
    var pageID = req.params.pageID;

    PageModel.findPageById(pageID)
      .then(function (page) {
        res.json(page);
      }, function (err) {
        res.send(err);
      });
  }

  function updatePage(req, res) {
    var pageID = req.params.pageID;
    var updatedPage = req.body;

    PageModel.updatePage(pageID, updatedPage)
      .then(function (page) {
        res.json(page);
      }, function (err) {
        res.send(err);
      });
  }

  function deletePage(req, res) {
    var pageID = req.params.pageID;

    PageModel.deletePage(pageID)
      .then(function (page) {
        res.json(page);
      }, function (err) {
        res.send(err);
      });
  }

};
