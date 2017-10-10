import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
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

  createWebsite(userId: string, website: Website) {
    const _id: string = '' + Math.random();
    website._id = _id;
    website.developerID = userId;
    this.websites.push(website);
    return website;
  }

  findWebsitesByUser(userId: string) {
    for ( let i = 0; i < this.websites.length; i++) {
      if (this.websites[i].developerID === userId) {
        return this.websites[i];
      }
    }
  }

  findWebsiteById(websiteId: string) {
    for ( let i = 0; i < this.websites.length; i++) {
      if (this.websites[i]._id === websiteId) {
        return this.websites[i];
      }
    }
  }

  updateWebsite(websiteId: string, website: Website) {
    for ( let i = 0; i < this.websites.length; i++) {
      if (this.websites[i]._id === websiteId) {
        this.websites[i].developerID = website.developerID;
        this.websites[i].name = website.name;
        this.websites[i].description = website.description;
        return this.websites[i];
      }
    }
  }

  deleteWebsite(websiteId: string) {
    for ( let i = 0; i < this.websites.length; i++) {
      if (this.websites[i]._id === websiteId) {
        this.websites.splice(i, 1);
      }
    }
  }
}
