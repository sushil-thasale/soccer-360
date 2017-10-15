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
    this.websites = this.websiteService.findWebsitesByUser(this.userID);
    const website: Website = this.websiteService.findWebsiteById(this.websiteID);
    this.websiteName = website.name;
    this.websiteDescription = website.description;
  }

  updateWebsite() {
    if (this.isEmptyOrSpaces(this.websiteName)) {
      this.errorMsg = 'Website Name is required!';
      this.errorFlag = true;
    } else {
      const success: boolean = this.websiteService.updateWebsite(this.userID, this.websiteID, this.websiteName, this.websiteDescription);
      if (!success) {
        this.errorMsg = 'This Website already exists!';
        this.errorFlag = true;
      } else {
        this.navigateToWebsiteList();
      }
    }
  }

    isEmptyOrSpaces(str: string) {
    return !str || str.trim() === '';
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteID);
    this.navigateToWebsiteList();
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
