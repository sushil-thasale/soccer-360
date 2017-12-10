import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ReviewService } from '../../../services/review.service.client';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  @Input() itemID: string;
  @Input() itemType: string;
  @Output() reviewSelection = new EventEmitter();
  reviews: any;
  user: any;
  criticId: string;
  isCritic: boolean;

  constructor(private reviewService: ReviewService,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.reviews = [];
    this.isCritic = false;

    // get critic details from shared service
    this.user = this.sharedService.user;
    this.criticId = this.user._id;

    if (this.user.roles === 'critic') {
      this.isCritic = true;
    }

    this.reviewService.findReviewsForItem(this.itemID)
      .subscribe(
        (reviews: any) => {
          this.reviews = reviews;
        }, (error) => {
          console.log(error + ' Reviews cannot be loaded');
        });
  }

  navigateToReview(review: any) {
    this.reviewSelection.emit({
      isSelected: true,
      reviewId: review._id});
  }

  navigateToReviewEdit(review: any) {
    this.router.navigate(['/review', review._id],
    { queryParams:
    { itemType: this.itemType, itemID: this.itemID}});
  }

  navigateToNewReview() {
    this.router.navigate(['/review/new'],
      { queryParams:
        { itemType: this.itemType, itemID: this.itemID}});
  }
}
