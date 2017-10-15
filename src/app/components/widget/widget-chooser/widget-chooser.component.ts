import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  userID: string;
  websiteID: string;
  pageID: string;

  constructor(private widgetService: WidgetService, private router: Router, private  route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
      this.websiteID = params['websiteID'];
      this.pageID = params['pageID'];
    });
  }

  createHeaderWidget() {
    const newWidget: any = { '_id': '', 'widgetType': 'HEADING', 'pageId': '', 'size': 4, 'text': '' };
    this.createWidget(newWidget);
  }

  createImageWidget() {
    const newWidget: any = {'_id': '', 'widgetType': 'IMAGE', 'pageId': '', 'width': '100%', 'url': 'URL'};
    this.createWidget(newWidget);
  }

  createYoutubeWidget() {
    const newWidget: any = {'_id': '', 'widgetType': 'YOUTUBE', 'pageId': '', 'width': '100%', 'url': 'URL'};
    this.createWidget(newWidget);
  }

  createWidget(newWidget: any) {
    const widget: any = this.widgetService.createWidget(this.pageID, newWidget);
    this.navigateToWidgetEdit(widget._id, widget.widgetType);
  }

  navigateToProfile() {
    this.router.navigate(['/user', this.userID]);
  }

  navigateToWidgetList() {
    this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', this.pageID, 'widget']);
  }

  navigateToWidgetEdit(widgetID: string, type: string) {
    this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', this.pageID, 'widget',
      widgetID], { queryParams: { type: type }});
  }
}
