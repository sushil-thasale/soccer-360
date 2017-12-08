module.exports = function () {
  var mongoose = require('mongoose');

  var PlayerSchema = mongoose.Schema({
    apiId: String,
    name: String,
    followers: [{type: mongoose.Schema.Types.ObjectId, ref:'UserModel'}],
  }, {collection: 'SoccerAppPlayers'});

  return PlayerSchema;
};
