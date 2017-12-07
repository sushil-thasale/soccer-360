module.exports = function () {
  var model = null;

  var api = {
    findPlayerByApiId: findPlayerByApiId,
    findPlayerByObjectId: findPlayerByObjectId,
    createPlayer: createPlayer,
    followPlayer: followPlayer,
    unfollowPlayer: unfollowPlayer,
    findAllPlayersForUser: findAllPlayersForUser,
    setModel: setModel
  };

  var mongoose = require('mongoose');

  var PlayerSchema = require('./player.schema.server.js')();
  var PlayerModel = mongoose.model('PlayerModel', PlayerSchema);

  return api;

  function findPlayerByApiId(playerApiId){
    return PlayerModel.find({apiId:playerApiId});
  }

  function findPlayerByObjectId(playerId){
    return PlayerModel.findById(playerId);
  }

  function findAllPlayersForUser(userId) {
    return PlayerModel.find({"followers" : {"$in" : [userId]}});
  }

  function createPlayer(newPlayer){
    return PlayerModel.create(newPlayer);
  }

  function followPlayer(userId, apiPlayerId){
    return PlayerModel.findOne({apiId: apiPlayerId})
      .then(function(player) {
        model.userModel.findUserById(userId)
          .then(function (user) {
            player.followers.push(user._id);
            player.save();
            user.players.push(player._id);
            user.save();
          }, function (error) {
            console.log(error + " cannot find user");
          });
      }, function (error) {
        console.log(error + " cannot find player");
      });
  }

  function unfollowPlayer(userId, apiPlayerId){
    return PlayerModel.findOne({apiId: apiPlayerId})
      .then(function(player) {
        model.userModel.findUserById(userId)
          .then(function (user) {
            player.followers.splice(player.followers.indexOf(user._id), 1);
            player.save();
            user.leagues.splice(user.leagues.indexOf(player._id), 1);
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
