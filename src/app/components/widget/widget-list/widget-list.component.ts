import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})

export class WidgetListComponent implements OnInit {

  userID: string;
  websiteID: string;
  pageID: string;
  widgets: any[];

  constructor(private widgetService: WidgetService, private router: Router, private  route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
      this.websiteID = params['websiteID'];
      this.pageID = params['pageID'];
    });
    this.widgetService.findWidgetsByPageId(this.pageID)
      .subscribe((widgets: any[]) => {
        this.widgets = widgets;
      });
  }

  navigateToProfile() {
    this.router.navigate(['/user', this.userID]);
  }

  navigateToPageList() {
    this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page']);
  }

  navigateToWidgetChooser() {
    this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', this.pageID, 'widget', 'new']);
  }

  navigateToWidgetEdit(widgetID: string, type: string) {
    this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', this.pageID, 'widget',
      widgetID], { queryParams: { type: type }});
  }
}
