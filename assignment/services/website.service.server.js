module.exports = function(app, WebsiteModel){

  // var websites = [
  //   { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
  //   { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
  //   { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
  //   { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
  //   { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
  //   { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
  //   { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
  // ];

  app.post("/api/user/:userID/website", createWebsite);
  app.get("/api/user/:userID/website", findWebsitesByUser);
  app.get("/api/website/:websiteID", findWebsiteById);
  app.put("/api/website/:websiteID", updateWebsite);
  app.delete("/api/website/:websiteID", deleteWebsite);


  function createWebsite(req, res){
    var userID = req.params.userID;
    var newWebsite = req.body;

    WebsiteModel.createWebsiteForUser(userID, newWebsite)
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

  function findWebsiteById(req, res) {
    var websiteID = req.params.websiteID;

    WebsiteModel.findWebsiteById(websiteID)
      .then(function (website) {
        res.json(website);
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
