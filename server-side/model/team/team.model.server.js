module.exports = function () {
  var model = null;
  var api = {
    searchTeamsByName : searchTeamsByName,
    findTeamByApiId: findTeamByApiId,
    findTeamByObjectId: findTeamByObjectId,
    createTeam: createTeam,
    followTeam: followTeam,
    unfollowTeam: unfollowTeam,
    findAllTeamsForUser: findAllTeamsForUser,
    setModel: setModel
  };

  var mongoose = require('mongoose');

  var TeamSchema = require('./team.schema.server.js')();
  var TeamModel = mongoose.model('TeamModel', TeamSchema);

  return api;

  function searchTeamsByName(keyword) {
    return TeamModel.find({"name": {'$regex' : '.*' + keyword + '.*', '$options' : 'i'}});
  }

  function findTeamByApiId(teamApiId){
    return TeamModel.find({apiId:teamApiId});
  }

  function findTeamByObjectId(teamId){
    return TeamModel.findById(teamId);
  }

  function findAllTeamsForUser(userId) {
    return TeamModel.find({"followers" : {"$in" : [userId]}});
  }

  function createTeam(newTeam){
    return TeamModel.create(newTeam);
  }

  function followTeam(userId, apiTeamId){
    return TeamModel.findOne({apiId: apiTeamId})
      .then(function(team) {
        model.userModel.findUserById(userId)
          .then(function (user) {
            team.followers.addToSet(user._id);
            team.save();
            user.teams.addToSet(team._id);
            user.save();
          }, function (error) {
            console.log(error + " cannot find user");
          });
      }, function (error) {
        console.log(error + " cannot find team");
      });
  }

  function unfollowTeam(userId, apiTeamId){
    return TeamModel.findOne({apiId: apiTeamId})
      .then(function(team) {
        model.userModel.findUserById(userId)
          .then(function (user) {
            team.followers.splice(team.followers.indexOf(user._id), 1);
            team.save();
            user.teams.splice(user.teams.indexOf(team._id), 1);
            user.save();
          }, function (err) {
            return err;
          });
      });
  }

  function setModel(_model) {
    model = _model;
  }
};
