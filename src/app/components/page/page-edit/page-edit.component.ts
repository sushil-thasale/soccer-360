import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../page.model.client';
import { PageService } from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})

export class PageEditComponent implements OnInit {

  userID: string;
  websiteID: string;
  pageID: string;
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
      this.pageID = params['pageID'];
    });
    this.pages = this.pageService.findPagesByWebsiteId(this.websiteID);
    const page: Page = this.pageService.findPageById(this.pageID);
    this.pageName = page.name;
    this.pageTitle = page.title;
  }

  updatePage() {
    if (this.isEmptyOrSpaces(this.pageName)) {
      this.errorMsg = 'Page Name is required!';
      this.errorFlag = true;
    } else {
      const success: boolean = this.pageService.updatePage(this.websiteID, this.pageID, this.pageName, this.pageTitle);
      if (!success) {
        this.errorMsg = 'This Page already exists!';
        this.errorFlag = true;
      } else {
        this.navigateToPageList();
      }
    }
  }

  isEmptyOrSpaces(str: string) {
    return !str || str.trim() === '';
  }

  deletePage() {
    this.pageService.deletePage(this.pageID);
    this.navigateToPageList();
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
