import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';

// injecting service into module
@Injectable()

export class FlickrService {

  key = '714e904fbce05845ec8c849009350fed';
  secret = 'bfc8b619c18b9626';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';

  constructor(private http: Http) {
  }

  api = {
    'searchPhotos': this.searchPhotos,
  };

  searchPhotos(searchTerm: string) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this.http.get(url);
      // .map((res: Response) => {
      //   return res.json();
      // });
  }
}
