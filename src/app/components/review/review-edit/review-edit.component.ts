import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../../../services/review.service.client';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {

  reviewId: string;
  review: any;
  criticId: string;
  user: any;
  title: string;
  imageUrl: string;
  videoUrl: string;
  comment: string;
  itemID: string;
  itemType: string;
  errorMsg = '';
  errorFlag: boolean;

  constructor(private reviewService: ReviewService,
              private router: Router,
              private  route: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    // get reviewId from path
    this.route.params.subscribe(params => {
      this.reviewId = params['reviewID'];
      this.reviewService.findReviewById(this.reviewId)
        .subscribe(
          (review: any) => {
            console.log(review);
            this.review = review;
            this.title = this.review.title;
            this.imageUrl = this.review.imageUrl;
            this.videoUrl = this.review.videoUrl;
            this.comment = this.review.comment;
            this.errorFlag = false;
            this.errorMsg = '';
          }, (error) => {
            this.errorMsg = 'Error in finding Review!!';
            this.errorFlag = true;
            console.log(error + ' error in finding review!');
          });
    });

    // get user profile from SharedService
    this.user = this.sharedService.user;
    this.criticId = this.user._id;

    // get itemId and itemType from query params
    this.route.queryParams.subscribe(params => {
      this.itemID = params['itemID'];
      this.itemType = params['itemType'];
    });
  }

  updateReview() {
    if (!this.title || this.isEmptyOrSpaces(this.title) || this.title.length < 2) {
      this.errorMsg = 'Appropriate Review Title is required!';
      this.errorFlag = true;
    } else {
      // check if website exists
      const newReview = {'title': this.title,
        'imageUrl': this.imageUrl,
        'videoUrl': this.videoUrl,
        'comment': this.comment,
        'itemType': this.itemType,
        'itemId': this.itemID,
        'criticId': this.criticId};
      this.reviewService.updateReview(this.reviewId, newReview)
        .subscribe(
          (review: any) => {
            console.log(review);
            this.errorFlag = false;
            this.errorMsg = '';
            this.navigateBackToNews();
          }, (error) => {
            this.errorMsg = 'Error in updating Review!!';
            this.errorFlag = true;
            console.log(error + ' error in updating review!');
          });
    }
  }

  isEmptyOrSpaces(str: string) {
    return !str || str.trim() === '';
  }

  navigateBackToNews() {
    this.router.navigate([this.itemType, this.itemID]);
  }
}
