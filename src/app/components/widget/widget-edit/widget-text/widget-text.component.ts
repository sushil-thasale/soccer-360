import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { WidgetService } from '../../../../services/widget.service.client';
import { Input } from '@angular/core';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  userID: string;
  websiteID: string;
  pageID: string;
  widget: any;
  name: string;
  text: string;
  rows: number;
  placeholder: string;
  formatted: boolean;

  @Input() widgetID: string;

  constructor(private widgetService: WidgetService, private router: Router, private  route: ActivatedRoute) { }

  ngOnInit() {
    this.formatted = false;
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
      this.websiteID = params['websiteID'];
      this.pageID = params['pageID'];
    });
    this.widgetService.findWidgetById(this.widgetID)
      .subscribe(
        (widget: any) => {
          this.widget = widget;
          this.name = this.widget.name;
          this.text = this.widget.text;
          this.rows = this.widget.rows;
          this.placeholder = this.widget.placeholder;
          this.formatted = this.widget.formatted;
        }, (error) => {
          console.log('Failed to find widget by ID!');
          return;
        });
  }

  updateWidget() {
    this.widget.text = this.text;
    this.widget.name = this.name;
    this.widget.rows = this.rows;
    this.widget.placeholder = this.placeholder;
    this.widget.formatted = this.formatted;
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

  toggleFormatted() {
    this.formatted = !this.formatted;
  }

  navigateToWidgetList() {
    this.router.navigate(['/user', this.userID, 'website', this.websiteID, 'page', this.pageID, 'widget']);
  }

  navigateToProfile() {
    this.router.navigate(['/user', this.userID]);
  }
}
