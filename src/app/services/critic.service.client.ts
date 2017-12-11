import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Http, Response, RequestOptions } from '@angular/http';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class CriticService {

  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router) { }

  api = {
    'createCriticRequest' : this.createCriticRequest,
    'findAllCriticApplications'   : this.findAllCriticApplications,
    'findAllCritics' : this.findAllCritics,
    'findAllPendingRequests' : this.findAllPendingRequests,
    'promoteToCritic' : this.promoteToCritic,
    'demoteToUser' : this.demoteToUser,
    'deleteRequest' : this.deleteRequest,
  };

  baseUrl: string = environment.baseUrl;
  options = new RequestOptions();

  deleteRequest(requestId: string) {
    const url: string = this.baseUrl + '/api/request/delete/' + requestId;
    return this.http.delete(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  createCriticRequest(criticRequest: any) {
    const url: string = this.baseUrl + '/api/critic';
    return this.http.post(url, criticRequest)
      .map((res: Response) => {
        return res.json();
      });
  }

  findAllCriticApplications() {
    const url: string = this.baseUrl + '/api/critic/apps';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  findAllCritics() {
    const url: string = this.baseUrl + '/api/critic';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  findAllPendingRequests() {
    const url: string = this.baseUrl + '/api/critic/pending';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  promoteToCritic(userId: string) {
    const url: string = this.baseUrl + '/api/critic/promote/' + userId;
    const body = {};
    return this.http.put(url, body)
      .map((res: Response) => {
        return res.json();
      });
  }

  demoteToUser(criticId: string) {
    const url: string = this.baseUrl + '/api/critic/demote/' + criticId;
    const body = {};
    return this.http.put(url, body)
      .map((res: Response) => {
        return res.json();
      });
  }
}
