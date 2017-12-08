module.exports = function () {
  var model = null;

  var api = {
    createUser: createUser,
    deleteUser: deleteUser,
    updateUser: updateUser,
    findUsers: findUsers,
    findUserById: findUserById,
    findUserByUsername: findUserByUsername,
    findUserByCredentials: findUserByCredentials,
    findUserByFacebookId: findUserByFacebookId,
    followUser: followUser,
    unfollowUser: unfollowUser,
    getAllCritics: getAllCritics,
    getCriticsByName: getCriticsByName,
    getAllUsers: getAllUsers,
    getUsersByName: getUsersByName,
    findUsersByLeague: findUsersByLeague,
    findUsersByTeam: findUsersByTeam,
    findUsersByPlayer: findUsersByPlayer,
    setModel: setModel
  };

  var mongoose = require('mongoose');

  var UserSchema = require('./user.schema.server')();
  var UserModel = mongoose.model('UserModel', UserSchema);

  return api;

  function findUsersByLeague(leagueId) {
    return UserModel.find({"leagues" : {"$in" : [leagueId]}});
  }

  function findUsersByTeam(teamId) {
    return UserModel.find({"teams" : {"$in" : [teamId]}});
  }

  function findUsersByPlayer(playerId) {
    return UserModel.find({"players" : {"$in" : [playerId]}});
  }

  function getAllCritics() {
    return UserModel.find({'roles': 'critic'});
  }

  function getCriticsByName(keyword) {
    return UserModel.find({'$and': [
      {'roles':'critic'},
      {'name': {'$regex' : '.*' + keyword + '.*', '$options' : 'i'}}
      ]});
  }

  function getAllUsers() {
    return UserModel.find({'roles': 'user'});
  }

  function getUsersByName(keyword) {
    return UserModel.find({'$and': [
      {'roles':'user'},
      {'name': {'$regex' : '.*' + keyword + '.*', '$options' : 'i'}}
    ]});
  }

  function createUser(user) {
    return UserModel.create(user);
  }

  function deleteUser(userId) {
    return UserModel.remove({_id: userId});
  }

  function findUserByFacebookId(facebookId) {
    return UserModel.findOne({'facebook.id': facebookId});
  }

  function findUserById(userId){
    return UserModel.findById(userId);
  }

  function findUsers(){
    return UserModel.find();
  }

  function findUserByUsername(username){
    return UserModel.find({"username": username});
  }

  function findUserByCredentials(username, password){
    return UserModel.findOne({"username": username, "password": password});
  }

  function updateUser(userId, newUser){
    return UserModel.update({_id:userId}, {$set:newUser});
  }

  function followUser(loggedInUserId, followUserId) {
    return UserModel.update({_id: loggedInUserId}, {$addToSet: {following: followUserId}})
      .then(function (response) {
        return UserModel.update({_id: followUserId}, {$addToSet: {followers: loggedInUserId}})
          .then(function (res) {
            return res;
          }, function (err) {
            return err;
          })
      }, function (err) {
        console.log(err);
        return err;
      })
  }

  function unfollowUser(loggedInUserId, unfollowUserId){
    UserModel.findById(loggedInUserId)
      .then(function (user) {
        user.following.splice(user.following.indexOf(unfollowUserId),1);
        return user.save();
      }, function (err) {
        return err;
      });

    return UserModel.findById(unfollowUserId)
      .then(function (user) {
        user.followers.splice(user.followers.indexOf(loggedInUserId),1);
        return user.save();
      }, function (err) {
        return err;
      });
  }

  function setModel(_model) {
    model = _model;
  }
};
