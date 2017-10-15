import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Website } from '../components/website/website.model.client';

// injecting service into module
@Injectable()

export class WebsiteService {

  constructor() { }

  websites: Website[] = [
    new Website ( '123', 'Facebook',     '456',  'Lorem' ),
    new Website ( '234', 'Tweeter',      '456',  'Lorem' ),
    new Website ( '456', 'Gizmodo',      '456',  'Lorem' ),
    new Website ( '890', 'Go',           '123',  'Lorem' ),
    new Website ( '567', 'Tic Tac Toe',  '123',  'Lorem' ),
    new Website ( '678', 'Checkers',     '123',  'Lorem' ),
    new Website ( '789', 'Chess',        '234',  'Lorem' )
  ];

  api = {
    'createWebsite'   : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };

  createWebsite(userID: string, name: string, description: string) {
    const _id: string = '' + (new Date()).getTime();
    // check if website exists
    if (!this.validateWebsiteName(userID, name)) {
      return false;
    }
    const website: Website = new Website(_id, name, userID, description);
    this.websites.push(website);
    return true;
  }

  validateWebsiteName(userID: string, name: string) {
    const userWebsites: Website[] = this.findWebsitesByUser(userID);
    for (let i = 0; i < userWebsites.length; i++) {
      if (userWebsites[i].name === name) {
        return false;
      }
    }
    return true;
  }

  validateWebsite(userID: string, webisteID: string, name: string) {
    const userWebsites: Website[] = this.findWebsitesByUser(userID);
    for (let i = 0; i < userWebsites.length; i++) {
      if (userWebsites[i]._id !== webisteID && userWebsites[i].name === name) {
        return false;
      }
    }
    return true;
  }

  findWebsitesByUser(userID: string) {
    const userWebsites: Website[] = [];
    for ( let i = 0; i < this.websites.length; i++) {
      if (this.websites[i].developerID === userID) {
        userWebsites.push(this.websites[i]);
      }
    }
    return userWebsites;
  }

  findWebsiteById(websiteID: string) {
    for ( let i = 0; i < this.websites.length; i++) {
      if (this.websites[i]._id === websiteID) {
        return this.websites[i];
      }
    }
    return null;
  }

  updateWebsite(userID: string, websiteID: string, name: string, description: string) {
    // check if website exists
    if (!this.validateWebsite(userID, websiteID, name)) {
      return false;
    }
    for ( let i = 0; i < this.websites.length; i++) {
      if (this.websites[i]._id === websiteID) {
        this.websites[i].name = name;
        this.websites[i].description = description;
        return true;
      }
    }
  }

  deleteWebsite(websiteID: string) {
    for ( let i = 0; i < this.websites.length; i++) {
      if (this.websites[i]._id === websiteID) {
        this.websites.splice(i, 1);
      }
    }
  }
}
