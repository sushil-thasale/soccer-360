module.exports = function () {
  var mongoose = require('mongoose');
  var CriticSchema = mongoose.Schema({
    isApproved: Boolean,
    applicant: {type: mongoose.Schema.Types.ObjectId, ref:'UserModel'},
    dateCreated: {type:Date, default: Date.now()}
  }, {collection: 'SoccerAppCritics'});

  return CriticSchema;
};
