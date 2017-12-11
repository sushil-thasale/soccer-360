module.exports = function () {
  var model = null;

  var api = {
    createCriticRequest: createCriticRequest,
    findAllCriticApplications: findAllCriticApplications,
    findAllCritics: findAllCritics,
    findAllPendingRequests: findAllPendingRequests,
    promoteToCritic: promoteToCritic,
    demoteToUser: demoteToUser,
    deleteRequest: deleteRequest,
    setModel: setModel
  };

  var mongoose = require('mongoose');

  var CriticSchema = require('./critic.schema.server')();
  var CriticModel = mongoose.model('CriticModel', CriticSchema);

  return api;

  function deleteRequest(requestId) {
    return CriticModel.remove({_id: requestId});
  }

  function createCriticRequest(criticRequest) {
    return CriticModel.find({$and: [
      {applicant: criticRequest.applicant},
      {isApproved: false}]})
      .then(function (response) {
        console.log('in critic model create request - then' + response);
        if (!response.length) {
          return CriticModel.create(criticRequest);
        } else {
          console.log('Already Applied! Request Pending!');
        }
      }, function (err) {
        console.log('in critic model create request - error' + err);
      });
  }

  function findAllCriticApplications() {
    return CriticModel.find();
  }

  function findAllCritics() {
    return CriticModel.find({"isApproved" : true});
  }

  function findAllPendingRequests() {
    return CriticModel.find({"isApproved" : false});
  }

  function promoteToCritic(criticId){
    return CriticModel.update({applicant:criticId}, {$set:{isApproved: true}})
      .then(function (response) {
        console.log('in promoteToCritic response' + response);
        return model.userModel.promoteToCritic(criticId)
          .then(function (res) {
            console.log('in promoteToCritic res' + res);
            return res;
          }, function (err) {
            console.log('in promoteToCritic error' + err);
            return err;
          })
      }, function (err) {
        console.log('in promoteToCritic error' + err);
        return err;
      });
  }

  function demoteToUser(criticId){
    return CriticModel.update({applicant:criticId}, {$set:{isApproved: false}})
      .then(function (response) {
        return model.userModel.update({_id: criticId}, {$set: {roles: 'user'}})
          .then(function (res) {
            return res;
          }, function (err) {
            return err;
          })
      }, function (err) {
        console.log(err);
        return err;
      });
  }

  function setModel(_model) {
    model = _model;
  }
};
