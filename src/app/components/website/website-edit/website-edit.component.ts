import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Website } from '../website.model.client';
import { WebsiteService } from '../../../services/website.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})

export class WebsiteEditComponent implements OnInit {

  userID: string;
  websiteID: string;
  website: Website;
  websites: Website[];
  websiteName: string;
  websiteDescription: string;
  errorMsg = '';
  errorFlag: boolean;

  constructor(private websiteService: WebsiteService, private router: Router, private  route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
      this.websiteID = params['websiteID'];
    });

    this.websiteService.findWebsitesByUser(this.userID)
      .subscribe((websites: Website[]) => {
        this.websites = websites;
      });

    this.websiteService.findWebsiteById(this.websiteID)
      .subscribe((website: Website) => {
        this.website = website;
        this.websiteName = this.website.name;
        this.websiteDescription = this.website.description;
      });
  }

  updateWebsite() {
    if (this.isEmptyOrSpaces(this.websiteName)) {
      this.errorMsg = 'Website Name is required!';
      this.errorFlag = true;
    } else {
      // check if website exists
      if (this.websiteService.validateWebsite(this.userID, this.websiteID, this.websiteName)) {
        const newWebsite: Website = new Website(this.websiteID, this.websiteName, this.userID, this.websiteDescription);
        this.websiteService.updateWebsite(newWebsite)
          .subscribe((website: Website) => {
            this.navigateToWebsiteList();
          });
      } else {
        this.errorMsg = 'This Website already exists!';
        this.errorFlag = true;
      }
    }
  }

    isEmptyOrSpaces(str: string) {
    return !str || str.trim() === '';
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteID)
      .subscribe((status: any) => {
        this.navigateToWebsiteList();
      });
  }

  navigateToProfile() {
    this.router.navigate(['/user', this.userID]);
  }

  navigateToPages(website: Website) {
    this.router.navigate(['/user', this.userID, 'website', website._id, 'page']);
  }

  navigateToWebsiteList() {
    this.router.navigate(['/user', this.userID, 'website']);
  }

  navigateToWebsiteEdit(website: Website) {
    this.router.navigate(['/user', this.userID, 'website', website._id]);
  }

  navigateToWebsiteNew() {
    this.router.navigate(['/user', this.userID, 'website', 'new']);
  }
}
