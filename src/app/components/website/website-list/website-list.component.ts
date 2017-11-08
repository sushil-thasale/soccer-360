import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Website } from '../website.model.client';
import { WebsiteService } from '../../../services/website.service.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  userID: string;
  websites: Website[];

  constructor(private websiteService: WebsiteService, private router: Router, private  route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
    });

    this.websiteService.findWebsitesByUser(this.userID)
      .subscribe((websites: Website[]) => {
        console.log('findWebsitesByUser website list ' + websites);
        this.websites = websites;
      });
  }

  navigateToProfile() {
    this.router.navigate(['/user', this.userID]);
  }

  navigateToWebsiteNew() {
    this.router.navigate(['/user', this.userID, 'website', 'new']);
  }

  navigateToPages(website: Website) {
    this.router.navigate(['/user', this.userID, 'website', website._id, 'page']);
  }

  navigateToWebsiteEdit(website: Website) {
    this.router.navigate(['/user', this.userID, 'website', website._id]);
  }
}
