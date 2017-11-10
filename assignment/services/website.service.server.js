module.exports = function(app, WebsiteModel){

  app.post("/api/user/:userID/website", createWebsite);
  app.get("/api/website/:websiteID", findWebsiteById);
  app.get("/api/user/:userID/website", findWebsitesByUser);
  app.put("/api/website/:websiteID", updateWebsite);
  app.delete("/api/website/:websiteID", deleteWebsite);

  function createWebsite(req, res){
    var userID = req.params.userID;
    var newWebsite = req.body;

    WebsiteModel
      .createWebsiteForUser(userID, newWebsite)
      .then(function (website) {
        res.json(website);
      },function (err) {
        console.log(err);
        res.sendStatus(404);
      });
  }

  function findWebsiteById(req, res) {
    var websiteID = req.params.websiteID;

    WebsiteModel.findWebsiteById(websiteID)
      .then(function (website) {
        res.json(website);
      }, function (err) {
        res.send(err);
      });
  }

  function findWebsitesByUser(req, res) {
    var userID = req.params.userID;

    WebsiteModel.findAllWebsitesForUser(userID)
      .then(function (websites) {
        res.json(websites);
      }, function (err) {
        res.send(err);
      });
  }

  function updateWebsite(req, res) {
    var websiteID = req.params.websiteID;
    var updatedWebsite = req.body;

    WebsiteModel.updateWebsite(websiteID, updatedWebsite)
      .then(function (website) {
        res.json(website);
      }, function (err) {
        res.send(err);
      });
  }

  function deleteWebsite(req, res) {
    var websiteID = req.params.websiteID;

    WebsiteModel.deleteWebsite(websiteID)
      .then(function (website) {
        res.json(website);
      }, function (err) {
        res.send(err);
      });
  }
};
