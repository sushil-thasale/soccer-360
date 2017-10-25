module.exports = function(app){

  var websites = [
    { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
  ];

  app.post("/api/user/:userID/website", createWebsite);
  app.get("/api/user/:userID/website", findWebsitesByUser);
  app.get("/api/website/:websiteID", findWebsiteById);
  app.put("/api/website/:websiteID", updateWebsite);
  app.delete("/api/website/:websiteID", deleteWebsite);


  function createWebsite(req, res){
    var newWebsite = req.body;
    newWebsite._id = "" + (new Date()).getTime();
    newWebsite.developerId = req.params.userID;
    websites.push(newWebsite);
    res.json(newWebsite);
  }

  function findWebsitesByUser(req, res) {
    var userID = req.params.userID;
    var userWebsites = [];
    for (var w in websites) {
      if (websites[w].developerId === userID) {
        userWebsites.push(websites[w]);
      }
    }
    res.json(userWebsites);
  }

  function findWebsiteById(req, res) {
    var websiteID = req.params.websiteID;
    var website = websites.find(function (website) {
      return website._id === websiteID;
    });
    res.json(website);
  }

  function updateWebsite(req, res) {
    var websiteID = req.params.websiteID;
    var newWebsite = req.body;
    for (var w in websites) {
      if (websites[w]._id === websiteID) {
        websites[w].name = newWebsite.name;
        websites[w].description = newWebsite.description;
        res.json(websites[w]);
        return;
      }
    }
  }

  function deleteWebsite(req, res) {
    var websiteID = req.params.websiteID;
    for(var w in websites) {
      if(websites[w]._id === websiteID) {
        websites.splice(w, 1);
        res.sendStatus(200);
        return;
      }
    }
    res.sendStatus(404);
  }

};
