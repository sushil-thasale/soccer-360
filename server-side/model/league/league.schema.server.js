module.exports = function () {
  var mongoose = require('mongoose');

  var LeagueSchema = mongoose.Schema({
    apiId: String,
    name: String,
    followers: [{type: mongoose.Schema.Types.ObjectId, ref:'UserModel'}],
  }, {collection: 'SoccerAppLeagues'});

  return LeagueSchema;
};
