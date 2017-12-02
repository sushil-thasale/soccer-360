import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { WidgetService } from '../../../../services/widget.service.client';
import { Input } from '@angular/core';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  userID: string;
  websiteID: string;
  pageID: string;
  widget: any;
  headerText: string;
  headerSize: string;

  @Input() widgetID: string;

  constructor(private widgetService: WidgetService, private router: Router, private  route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
      this.websiteID = params['websiteID'];
      this.pageID = params['pageID'];
    });
    this.widgetService.findWidgetById(this.widgetID)
      .subscribe(
        (widget: any) => {
          this.widget = widget;
          this.headerText = this.widget.text;
          this.headerSize = this.widget.size;
        }, (error) => {
          console.log('Failed to find widget by ID!');
          return;
        });
  }

  updateWidget() {
    this.widget.text = this.headerText;
    this.widget.size = this.headerSize;
    this.widgetService.updateWidget(this.widgetID, this.widget)
      .subscribe(
        (widget: any) => {
          this.navigateToWidgetList();
        }, (error) => {
          console.log('Error in updating widget!!');
          return;
        });
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetID)
      .subscribe(
        (status: any) => {
          this.navigateToWidgetList();
        }, (error) => {
          console.log('Failed to delete a widget!');
          return;
        });
  }

  navigateToWidgetList() {
    this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', this.pageID, 'widget']);
  }

  navigateToProfile() {
    this.router.navigate(['/user', this.userID]);
  }
}
