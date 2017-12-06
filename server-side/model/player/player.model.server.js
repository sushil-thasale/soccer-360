module.exports = function () {
  var model = null;

  var api = {
    findPlayerById: findPlayerById,
    createPlayer: createPlayer,
    followPlayer: followPlayer,
    unfollowPlayer: unfollowPlayer,
    setModel: setModel
  };

  var mongoose = require('mongoose');

  var PlayerSchema = require('./player.schema.server.js')();
  var PlayerModel = mongoose.model('PlayerModel', PlayerSchema);

  return api;

  function findPlayerById(playerId){
    return PlayerModel.find({id:playerId});
  }

  function createPlayer(newPlayer, user){
    return PlayerModel.create(newPlayer)
      .then(function (player) {
        user.players.push(player._id);
        user.save();
        player.save();
      }, function (err) {
        return err;
      });
  }

  function followPlayer(userId, apiPlayerId){
    return PlayerModel.findOne({apiId: apiPlayerId})
      .then(function(player) {
        if (player == null) {
          var newPlayer= new PlayerModel({"apiId": apiPlayerId});
          model.userModel.findUserById(userId)
            .then(function (user) {
              newPlayer.followers.push(user._id);
              createPlayer(newPlayer, user);
            }, function (err) {
              return err;
            });
        } else {
          model.userModel.findUserById(userId)
            .then(function (user) {
              player.followers.push(user._id);
              user.leagues.push(player._id);
              user.save();
              player.save();
            }, function (err) {
              return err;
            });
        }
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
