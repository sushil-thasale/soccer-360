module.exports = function(app, ReviewModel) {

  app.get("/api/review/:itemId", findReviewsForItem);
  app.post("/api/review", createReview);
  app.put("/api/review/:reviewId", updateReview);
  app.get("/api/findReview/:reviewId", findReviewById);
  app.delete("/api/review/:reviewId", deleteReview);

  function findReviewById(req, res) {
    var reviewId = req.params.reviewId;
    console.log('in server' + reviewId);

    ReviewModel.findReviewById(reviewId)
      .then(function (review) {
        console.log('in server then' + review);
        res.json(review);
      }, function (err) {
        res.send(err);
      });
  }

  function createReview(req, res){
    var newReview = req.body;
    console.log('new review server' + newReview.title);
    ReviewModel
      .createReview(newReview)
      .then(function(review) {
        console.log('in server then' + review);
        res.json(review);
      }, function (error) {
        res.sendStatus(500).send(error);
      });
  }

  function updateReview(req, res) {
    var reviewId = req.params.reviewId;
    var newReview = req.body;

    ReviewModel
      .updateReview(reviewId, newReview)
      .then(function(review) {
          res.json(review);
        },
        function (error) {
          res.sendStatus(404).send(error);

        })
  }

  function deleteReview(req, res) {
    var reviewId = req.params.reviewId;

    ReviewModel
      .deleteReview(reviewId)
      .then(function (response) {
        res.sendStatus(200);
      },function (err) {
        res.sendStatus(404);
      });
  }

  function findReviewsForItem(req, res) {
    var itemId = req.params.itemId;

    ReviewModel.findReviewsForItem(itemId)
      .then(function (reviews) {
        res.json(reviews);
      }, function (err) {
        res.send(err);
      });
  }
}
