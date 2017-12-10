module.exports = function () {
  var mongoose = require('mongoose');
  var ReviewSchema = mongoose.Schema({
    title: String,
    imageUrl: String,
    videoUrl: String,
    comment: String,
    itemType: {type: String, default: "league", enum: ["league", "team", "player"]},
    itemId: String,
    criticId: {type: mongoose.Schema.Types.ObjectId, ref:'UserModel'},
  }, {collection: 'SoccerAppReviews'});

  return ReviewSchema;
};
