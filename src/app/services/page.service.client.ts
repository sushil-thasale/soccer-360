import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Page } from '../components/page/page.model.client';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';

// injecting service into module
@Injectable()

export class PageService {

  constructor(private http: Http) { }

  api = {
    'createPage'   : this.createPage,
    'findPageByWebsiteId' : this.findPagesByWebsiteId,
    'findPageById' : this.findPageById,
    'updatePage' : this.updatePage,
    'deletePage' : this.deletePage
  };

  websitePages: Page[] = [];
  baseUrl: string = environment.baseUrl;


  createPage(websiteID: string, newPage: any) {
    const url: string = this.baseUrl + '/api/website/' + websiteID + '/page';
    return this.http.post(url, newPage)
      .map((res: Response) => {
        return res.json();
      });
  }

  validatePageName(websiteID: string, name: string) {
    this.findPagesByWebsiteId(websiteID)
      .subscribe(
        (pages: Page[]) => {
          this.websitePages = pages;
        }, (error) => {
          console.log('Error in Finding Pages');
        });

    for (let i = 0; i < this.websitePages.length; i++) {
      if (this.websitePages[i].name === name) {
        return false;
      }
    }
    return true;
  }

  validatePage(websiteID: string, pageID: string, name: string) {
    this.findPagesByWebsiteId(websiteID)
      .subscribe(
        (pages: Page[]) => {
          this.websitePages = pages;
        }, (error) => {
          console.log('Error in Finding Pages');
        });

    for (let i = 0; i < this.websitePages.length; i++) {
      if (this.websitePages[i]._id !== pageID && this.websitePages[i].name === name) {
        return false;
      }
    }
    return true;
  }

  findPagesByWebsiteId(websiteID: string) {
    const url: string = this.baseUrl + '/api/website/' + websiteID + '/page';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  findPageById(pageID: string)  {
    const url: string = this.baseUrl + '/api/page/' + pageID;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  updatePage(page: Page) {
    const url: string = this.baseUrl + '/api/page/' + page._id;
    return this.http.put(url, page)
      .map((res: Response) => {
        return res.json();
      });
  }

  deletePage(pageID: string) {
    const url: string = this.baseUrl + '/api/page/' + pageID;
    return this.http.delete(url)
      .map((res: Response) => {
        return res.status;
      });
  }
}
