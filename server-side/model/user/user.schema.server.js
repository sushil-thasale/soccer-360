module.exports = function () {
  var mongoose = require('mongoose');
  var UserSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    picUrl: String,
    leagues: [{type: mongoose.Schema.Types.ObjectId, ref:'LeagueModel'}],
    teams: [{type: mongoose.Schema.Types.ObjectId, ref:'TeamModel'}],
    players: [{type: mongoose.Schema.Types.ObjectId, ref:'PlayerModel'}],
    following: [{type: mongoose.Schema.Types.ObjectId, ref:'UserModel'}],
    followers: [{type: mongoose.Schema.Types.ObjectId, ref:'UserModel'}],
    roles: {type: String, default: "user", enum: ["user", "admin", "critic"]},
    reviews: [{type: mongoose.Schema.Types.ObjectId, ref:'ReviewModel'}],
    facebook: {id:String, token: String},
    dateCreated: {type:Date, default: Date.now()}
  }, {collection: 'SoccerAppUsers'});

  return UserSchema;
};
