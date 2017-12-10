import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { User } from '../components/user/user.model.client';
import { environment } from '../../environments/environment';
import { Http, Response, RequestOptions } from '@angular/http';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class ReviewService {

  constructor(private http: Http) { }

  api = {
    'findReviewsForItem'   : this.findReviewsForItem,
    'createReview' : this.createReview,
    'updateReview' : this.updateReview,
    'deleteReview' : this.deleteReview,
    'findReviewById': this.findReviewById
  };

  baseUrl: string = environment.baseUrl;
  options = new RequestOptions();

  findReviewById(reviewId: string) {
    console.log('in client service' + reviewId);
    const url: string = this.baseUrl + '/api/findReview/' + reviewId;
    return this.http.get(url)
      .map((res: Response) => {
        console.log('in client service then' + res);
        return res.json();
      });
  }

  findReviewsForItem(itemId: string) {
    const url: string = this.baseUrl + '/api/review/' + itemId;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  createReview(newReview: any) {
    console.log('in client service' + newReview.title);
    const url: string = this.baseUrl + '/api/review';
    return this.http.post(url, newReview)
      .map((res: Response) => {
        return res.json();
      });
  }

  updateReview(reviewId: string, newReview: any) {
    const url: string = this.baseUrl + '/api/review/' + reviewId;
    return this.http.put(url, newReview)
      .map((res: Response) => {
        return res.json();
      });
  }

  deleteReview(reviewId: string) {
    const url: string = this.baseUrl + '/api/review/' + reviewId;
    return this.http.delete(url)
      .map((res: Response) => {
        return res.json();
      });
  }
}
