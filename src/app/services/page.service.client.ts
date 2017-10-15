import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Page } from '../components/page/page.model.client';

// injecting service into module
@Injectable()

export class PageService {

  constructor() { }

  pages: Page[] = [
    new Page ( '321', 'Post 1', '890', 'Lorem' ),
    new Page ( '432', 'Post 2', '890', 'Lorem' ),
    new Page ( '543', 'Post 3', '890', 'Lorem' )
  ];

  api = {
    'createPage'   : this.createPage,
    'findPageByWebsiteId' : this.findPagesByWebsiteId,
    'findPageById' : this.findPageById,
    'updatePage' : this.updatePage,
    'deletePage' : this.deletePage
  };

  createPage(websiteID: string, name: string, title: string) {
    const _id: string = '' + (new Date()).getTime();
    // check if page name exists
    if (!this.validatePageName(websiteID, name)) {
      return false;
    }
    const newPage: Page = new Page(_id, name, websiteID, title);
    this.pages.push(newPage);
    return true;
  }

  validatePageName(websiteID: string, name: string) {
    const websitePages: Page[] = this.findPagesByWebsiteId(websiteID);
    for (let i = 0; i < websitePages.length; i++) {
      if (websitePages[i].name === name) {
        return false;
      }
    }
    return true;
  }

  validatePage(websiteID: string, pageID: string, name: string) {
    const websitePages: Page[] = this.findPagesByWebsiteId(websiteID);
    for (let i = 0; i < websitePages.length; i++) {
      if (websitePages[i]._id !== pageID && websitePages[i].name === name) {
        return false;
      }
    }
    return true;
  }

  findPagesByWebsiteId(websiteID: string) {
    const websitePages: Page[] = [];
    for ( let i = 0; i < this.pages.length; i++) {
      if (this.pages[i].websiteID === websiteID) {
        websitePages.push(this.pages[i]);
      }
    }
    return websitePages;
  }

  findPageById(pageID: string)  {
    for ( let i = 0; i < this.pages.length; i++) {
      if (this.pages[i]._id === pageID) {
        return this.pages[i];
      }
    }
    return null;
  }

  updatePage(websiteID: string, pageID: string, name: string, title: string) {
    // check if page name exists
    if (!this.validatePage(websiteID, pageID, name)) {
      return false;
    }
    for ( let i = 0; i < this.pages.length; i++) {
      if (this.pages[i]._id === pageID) {
        this.pages[i].name = name;
        this.pages[i].title = title;
        return true;
      }
    }
  }

  deletePage(pageID: string) {
    for ( let i = 0; i < this.pages.length; i++) {
      if (this.pages[i]._id === pageID) {
        this.pages.splice(i, 1);
      }
    }
  }
}
