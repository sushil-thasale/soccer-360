import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Website } from '../website.model.client';
import { WebsiteService } from '../../../services/website.service.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})

export class WebsiteNewComponent implements OnInit {

  userID: string;
  websites: Website[];
  websiteName: string;
  websiteDescription: string;
  errorFlag: boolean;
  errorMsg = 'Website Name is required!';

  constructor(private websiteService: WebsiteService, private router: Router, private  route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
    });
    this.websites = this.websiteService.findWebsitesByUser(this.userID);
  }

  createWebsite() {
    if (!this.websiteName) {
      this.errorMsg = 'Website Name is required!';
      this.errorFlag = true;
    } else {
      const success: boolean = this.websiteService.createWebsite(this.userID, this.websiteName, this.websiteDescription);
      if (!success) {
        this.errorMsg = 'This Website already exists!';
        this.errorFlag = true;
      } else {
        this.navigateToWebsiteList();
      }
    }
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

  reloadPage() {
    this.router.navigate(['/user', this.userID, 'website', 'new']);
  }
}
