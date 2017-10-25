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
  pageDescription: string;
  errorFlag: boolean;
  errorMsg = 'Page Name is required!';

  constructor(private pageService: PageService, private router: Router, private  route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
      this.websiteID = params['websiteID'];
    });
    this.pageService.findPagesByWebsiteId(this.websiteID)
      .subscribe((pages: Page[]) => {
        this.pages = pages;
      });
  }

  createPage() {
    if (!this.pageName) {
      this.errorMsg = 'page Name is required!';
      this.errorFlag = true;
    } else {
      // check if page exists
      if (this.pageService.validatePageName(this.websiteID, this.pageName)) {
        const newPage: Page = new Page('', this.pageName, this.websiteID, this.pageDescription);
        this.pageService.createPage(this.websiteID, newPage)
          .subscribe((page: Page) => {
            this.navigateToPageList();
          });
      } else {
        this.errorMsg = 'This Page Name already exists!';
        this.errorFlag = true;
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
