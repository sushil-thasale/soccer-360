module.exports = function () {
  var model = null;
  var api = {
    createReview: createReview,
    findReviewsForItem: findReviewsForItem,
    updateReview: updateReview,
    deleteReview: deleteReview,
    findReviewById: findReviewById,
    setModel: setModel
  };

  var mongoose = require('mongoose');

  var ReviewSchema = require('./review.schema.server')();
  var ReviewModel = mongoose.model('ReviewModel', ReviewSchema);

  return api;

  function findReviewById(reviewId){
    console.log('in model' + reviewId);
    return ReviewModel.findById(reviewId);
  }

  function createReview(review) {
    console.log('new review model' + review);
    return ReviewModel.create(review);
  }

  function deleteReview(reviewId) {
    return ReviewModel.remove({_id: reviewId});
  }

  function updateReview(reviewId, review){
    return ReviewModel.update({_id:reviewId}, {$set:review});
  }

  function findReviewsForItem(itemId){
    return ReviewModel.find({"itemId": itemId});
  }

  function setModel(_model) {
    model = _model;
  }
};
