module.exports = function () {
  var model = null;
  var api = {
    findTeamById: findTeamById,
    createTeam: createTeam,
    followTeam: followTeam,
    unfollowTeam: unfollowTeam,
    setModel: setModel
  };

  var mongoose = require('mongoose');

  var TeamSchema = require('./team.schema.server.js')();
  var TeamModel = mongoose.model('TeamModel', TeamSchema);

  return api;

  function findTeamById(teamId){
    return TeamModel.find({id:teamId});
  }

  function createTeam(newTeam, user){
    return TeamModel.create(newTeam)
      .then(function (team) {
        user.teams.push(team._id);
        user.save();
        team.save();
      }, function (err) {
        return err;
      });
  }

  function followTeam(userId, apiTeamId){
    return TeamModel.findOne({apiId: apiTeamId})
      .then(function(team) {
        if (team == null) {
          var newTeam = new TeamModel({"apiId": apiTeamId});
          model.userModel.findUserById(userId)
            .then(function (user) {
              newTeam.followers.push(user._id);
              createTeam(newTeam, user);
            }, function (err) {
              return err;
            });
        } else {
          model.userModel.findUserById(userId)
            .then(function (user) {
              team.followers.push(user._id);
              user.teams.push(team._id);
              user.save();
              team.save();
            }, function (err) {
              return err;
            });
        }
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
