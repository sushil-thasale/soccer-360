module.exports = function () {
  var model = null;
  var api = {
    searchLeaguesByName : searchLeaguesByName,
    findLeagueByApiId: findLeagueByApiId,
    findLeagueByObjectId: findLeagueByObjectId,
    createLeague: createLeague,
    followLeague: followLeague,
    unfollowLeague: unfollowLeague,
    findAllLeaguesForUser: findAllLeaguesForUser,
    setModel: setModel
  };

  var mongoose = require('mongoose');

  var LeagueSchema = require('./league.schema.server.js')();
  var LeagueModel = mongoose.model('LeagueModel', LeagueSchema);

  return api;

  function searchLeaguesByName(keyword) {
    return LeagueModel.find({'name': {'$regex': keyword}})
  }

  function findLeagueByApiId(leagueApiId){
    return LeagueModel.find({apiId:leagueApiId});
  }

  function findLeagueByObjectId(leagueId){
    return LeagueModel.findById(leagueId);
  }

  function findAllLeaguesForUser(userId) {
    return LeagueModel.find({"followers" : {"$in" : [userId]}});
  }

  function createLeague(newLeague){
    return LeagueModel.create(newLeague);
  }

  function followLeague(userId, apiLeagueId){
    return LeagueModel.findOne({apiId: apiLeagueId})
      .then(function(league) {
        model.userModel.findUserById(userId)
          .then(function (user) {
            league.followers.push(user._id);
            league.save();
            user.leagues.push(league._id);
            user.save();
          }, function (error) {
            console.log(error + " cannot find user");
          });
        }, function (error) {
        console.log(error + " cannot fins league");
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
