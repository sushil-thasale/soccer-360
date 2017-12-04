import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

// injecting service into module
@Injectable()

export class SoccerServiceClient {

  urlBase = environment.apiBaseUrl + 'SEARCHDOMAIN' + '?' + 'SEARCHQUERY' + 'Authorization=' + environment.apiKey;

  constructor(private http: Http) {
  }

  api = {
    'searchMatchesByDate': this.searchMatchesByDate,
  };

  searchMatchesByDate(date: string) {
    const searchDomain = 'matches';
    const searchQuery = 'match_date=' + date + '&';
    const url = this.urlBase
      .replace('SEARCHDOMAIN', searchDomain)
      .replace('SEARCHQUERY', searchQuery);
    return this.http.get(url);
  }
}
