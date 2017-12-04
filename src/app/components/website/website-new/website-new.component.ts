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
  website: Website;
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

    this.websiteService.findWebsitesByUser(this.userID)
      .subscribe(
        (websites: Website[]) => {
          this.websites = websites;
        }, (error) => {
          this.errorFlag = true;
          this.errorMsg = 'Website no found!!';
          console.log('Website No Found!');
        });
  }

  createWebsite() {
    if (!this.websiteName) {
      this.errorMsg = 'Website Name is required!';
      this.errorFlag = true;
    } else {
      // check if website exists
      if (this.websiteService.validateWebsiteName(this.userID, this.websiteName)) {
        const newWebsite = {'developerId': this.userID, 'name': this.websiteName, 'description': this.websiteDescription};
        this.websiteService.createWebsite(this.userID, newWebsite)
          .subscribe(
            (website) => {
              console.log('in website create' + website);
              this.navigateToWebsiteList();
            }, (error) => {
              this.errorMsg = 'Error in creating new Website!';
              this.errorFlag = true;
              console.log('error in creating website!');
            });
      } else {
        this.errorMsg = 'This Website already exists!';
        this.errorFlag = true;
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
