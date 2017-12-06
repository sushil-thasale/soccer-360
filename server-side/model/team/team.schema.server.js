module.exports = function () {
  var mongoose = require('mongoose');

  var TeamSchema = mongoose.Schema({
    apiId: String,
    name: String,
    followers: [{type: mongoose.Schema.Types.ObjectId, ref:'UserModel'}],
  }, {collection: 'SoccerAppTeams'});

  return TeamSchema;
};
