module.exports = function () {
  var model = null;
  var api = {
    findLeagueById: findLeagueById,
    createLeague: createLeague,
    followLeague: followLeague,
    unfollowLeague: unfollowLeague,
    setModel: setModel
  };

  var mongoose = require('mongoose');

  var LeagueSchema = require('./league.schema.server.js')();
  var LeagueModel = mongoose.model('LeagueModel', LeagueSchema);

  return api;

  function findLeagueById(leagueId){
    return LeagueModel.find({id:leagueId});
  }

  function createLeague(newLeague, user){
    return LeagueModel.create(newLeague)
      .then(function (league) {
        user.leagues.push(league._id);
        user.save();
        league.save();
      }, function (err) {
        return err;
      });
  }

  function followLeague(userId, apiLeagueId){
    return LeagueModel.findOne({apiId: apiLeagueId})
      .then(function(league) {
        if (league == null) {
          var newLeague = new LeagueModel({"apiId": apiLeagueId});
          model.userModel.findUserById(userId)
            .then(function (user) {
              newLeague.followers.push(user._id);
              createLeague(newLeague, user);
            }, function (err) {
              return err;
            });
        } else {
          model.userModel.findUserById(userId)
            .then(function (user) {
              league.followers.push(user._id);
              user.leagues.push(league._id);
              user.save();
              league.save();
            }, function (err) {
              return err;
            });
        }
      });
  }

  function unfollowLeague(userId, apiLeagueId){
    return LeagueModel.findOne({apiId: apiLeagueId})
      .then(function(league) {
        model.userModel.findUserById(userId)
            .then(function (user) {
              league.followers.splice(league.followers.indexOf(user._id), 1);
              league.save();
              user.leagues.splice(user.leagues.indexOf(league._id), 1);
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
