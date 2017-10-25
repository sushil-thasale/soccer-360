import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Website } from '../components/website/website.model.client';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';

// injecting service into module
@Injectable()

export class WebsiteService {

  constructor(private http: Http) { }

  api = {
    'createWebsite'   : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };

  userWebsites: Website[];
  baseUrl: string = environment.baseUrl;

  createWebsite(userID: string, website: Website) {
    const url: string = this.baseUrl + '/api/user/' + userID + '/website';
    return this.http.post(url, website)
      .map((res: Response) => {
        return res.json();
      });
  }

  validateWebsiteName(userID: string, name: string) {
    this.findWebsitesByUser(userID)
      .subscribe((websites: Website[]) => {
        this.userWebsites = websites;
      });

    for (let i = 0; i < this.userWebsites.length; i++) {
      if (this.userWebsites[i].name === name) {
        return false;
      }
    }
    return true;
  }

  validateWebsite(userID: string, webisteID: string, name: string) {

    this.findWebsitesByUser(userID)
      .subscribe((websites: Website[]) => {
        this.userWebsites = websites;
      });

    for (let i = 0; i < this.userWebsites.length; i++) {
      if (this.userWebsites[i]._id !== webisteID && this.userWebsites[i].name === name) {
        return false;
      }
    }
    return true;
  }

  findWebsitesByUser(userID: string) {
    const url: string = this.baseUrl + '/api/user/' + userID + '/website';
    return this.http.get(url)
      .map((res: Response) => {
          return res.json();
        });
  }

  findWebsiteById(websiteID: string) {
    const url: string = this.baseUrl + '/api/website/' + websiteID;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  updateWebsite(website: Website) {
    const url: string = this.baseUrl + '/api/website/' + website._id;
    return this.http.put(url, website)
      .map((res: Response) => {
        return res.json();
      });
  }

  deleteWebsite(websiteID: string) {
    const url: string = this.baseUrl + '/api/website/' + websiteID;
    return this.http.delete(url)
      .map((res: Response) => {
        return res.status;
      });
  }
}
