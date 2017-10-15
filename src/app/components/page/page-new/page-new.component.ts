import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../page.model.client';
import { PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})

export class PageNewComponent implements OnInit {

  userID: string;
  websiteID: string;
  pages: Page[];
  pageName: string;
  pageTitle: string;
  errorFlag: boolean;
  errorMsg = 'Page Name is required!';

  constructor(private pageService: PageService, private router: Router, private  route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
      this.websiteID = params['websiteID'];
    });
    this.pages = this.pageService.findPagesByWebsiteId(this.websiteID);
  }

  createPage() {
    if (!this.pageName) {
      this.errorMsg = 'page Name is required!';
      this.errorFlag = true;
    } else {
      const success: boolean = this.pageService.createPage(this.websiteID, this.pageName, this.pageTitle);
      if (!success) {
        this.errorMsg = 'This page already exists!';
        this.errorFlag = true;
      } else {
        this.navigateToPageList();
      }
    }
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

  navigateToPageList() {
    this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page']);
  }

  navigateToPageEdit(page: Page) {
    this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', page._id]);
  }

  navigateToWidgetList(page: Page) {
    this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', page._id, 'widget']);
  }
}
