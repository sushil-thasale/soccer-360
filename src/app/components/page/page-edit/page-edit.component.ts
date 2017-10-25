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
  page: Page;
  pages: Page[];
  pageName: string;
  pageDescription: string;
  errorFlag: boolean;
  errorMsg = 'Page Name is required!';

  constructor(private pageService: PageService, private router: Router, private  route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
      this.websiteID = params['websiteID'];
      this.pageID = params['pageID'];
    });

    this.pageService.findPagesByWebsiteId(this.websiteID)
      .subscribe((pages: Page[]) => {
        this.pages = pages;
      });

    this.pageService.findPageById(this.pageID)
      .subscribe((page: Page) => {
        this.page = page;
        this.pageName = this.page.name;
        this.pageDescription = this.page.description;
      });
  }

  updatePage() {
    if (this.isEmptyOrSpaces(this.pageName)) {
      this.errorMsg = 'Page Name is required!';
      this.errorFlag = true;
    } else {
      // check if website exists
      if (this.pageService.validatePage(this.websiteID, this.pageID, this.pageName)) {
        const newPage: Page = new Page(this.pageID, this.pageName, this.websiteID, this.pageDescription);
        this.pageService.updatePage(newPage)
          .subscribe((page: Page) => {
            this.navigateToPageList();
          });
      } else {
        this.errorMsg = 'This Page Name already exists!';
        this.errorFlag = true;
      }
    }
  }
  isEmptyOrSpaces(str: string) {
    return !str || str.trim() === '';
  }

  deletePage() {
    this.pageService.deletePage(this.pageID)
      .subscribe((status: any) => {
        this.navigateToPageList();
      });
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
