import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ReviewService } from '../../../services/review.service.client';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-review-display',
  templateUrl: './review-display.component.html',
  styleUrls: ['./review-display.component.css']
})
export class ReviewDisplayComponent implements OnInit {

  @Input() reviewId: string;
  review: any;
  errorFlag: boolean;
  errorMsg: string;
  sanitizedURL: SafeUrl;

  constructor(private reviewService: ReviewService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (this.reviewId != null && !this.isEmptyOrSpaces(this.reviewId)) {
      this.reviewService.findReviewById(this.reviewId)
        .subscribe(
          (review: any) => {
            this.review = review;
            if (!this.isEmptyOrSpaces(this.review.videoUrl)) {
              this.sanitizedURL = this.getEmbededUrl();
            }
            this.errorFlag = false;
            this.errorMsg = '';
          }, (error) => {
            this.errorMsg = 'Error in finding Review!!';
            this.errorFlag = true;
            console.log(error + ' error in finding review!');
          });
    }
  }

  isEmptyOrSpaces(str: string) {
    return !str || str.trim() === '';
  }

  getEmbededUrl() {
    const urlParts: string[] = this.review.videoUrl.split('/');
    const videoId: string = urlParts[urlParts.length - 1];
    const embededUrl: string = 'https://www.youtube.com/embed/' + videoId;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embededUrl);
  }

}
