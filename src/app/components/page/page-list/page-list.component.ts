import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../page.model.client';
import { PageService } from '../../../services/page.service.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})

export class PageListComponent implements OnInit {

  userID: string;
  websiteID: string;
  pages: Page[];

  constructor(private pageService: PageService, private router: Router, private  route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
      this.websiteID = params['websiteID'];
    });
    this.pages = this.pageService.findPagesByWebsiteId(this.websiteID);
  }

  navigateToProfile() {
    this.router.navigate(['/user', this.userID]);
  }

  navigateToWebsiteList() {
    this.router.navigate(['/user', this.userID, 'website']);
  }

  navigateToPageNew() {
    this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', 'new']);
  }

  navigateToPageEdit(page: Page) {
    this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', page._id]);
  }

  navigateToWidgetList(page: Page) {
    this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', page._id, 'widget']);
  }
}
