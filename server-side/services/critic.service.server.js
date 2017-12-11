module.exports = function(app, CriticModel) {

  app.post("/api/critic", createCriticRequest);
  app.get("/api/critic", findAllCritics);
  app.get("/api/critic/apps", findAllCriticApplications);
  app.get("/api/critic/pending", findAllPendingRequests);
  app.put("/api/critic/promote/:userId", promoteToCritic);
  app.put("/api/critic/demote/:criticId", demoteToUser);
  app.delete("/api/request/delete/:requestId", deleteRequest);

  function deleteRequest(req, res) {
    var requestId = req.params.requestId;
    CriticModel
      .deleteRequest(requestId)
      .then(function(request){
        res.json(request);
      });
  }

  function createCriticRequest(req, res){
    var newCriticRequest = req.body;

    CriticModel
      .createCriticRequest(newCriticRequest)
      .then(function(criticRequest) {
        res.json(criticRequest);
      }, function (error) {
        res.sendStatus(500).send(error);
      });
  }

  function findAllCriticApplications(req, res) {
    CriticModel
      .findAllCriticApplications()
      .then(function(apps){
        res.json(apps);
      });
  }

  function findAllCritics(req, res) {
    CriticModel
      .findAllCritics()
      .then(function(critics){
        res.json(critics);
      });
  }

  function findAllPendingRequests(req, res) {
    CriticModel
      .findAllPendingRequests()
      .then(function(apps){
        res.json(apps);
      });
  }

  function promoteToCritic(req, res) {
    var userId = req.params.userId;

    CriticModel
      .promoteToCritic(userId)
      .then(function(critic) {
          res.json(critic);
        }, function (error) {
          res.sendStatus(404).send(error);
        });
  }

  function demoteToUser(req, res) {
    var criticId = req.params.criticId;

    CriticModel
      .demoteToUser(criticId)
      .then(function(user) {
        res.json(user);
      }, function (error) {
        res.sendStatus(404).send(error);
      });
  }
}
