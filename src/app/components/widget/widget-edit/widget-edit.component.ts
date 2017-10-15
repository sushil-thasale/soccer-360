import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  userID: string;
  websiteID: string;
  pageID: string;
  widgetID: string;
  widget: any;
  type: string;

  constructor(private widgetService: WidgetService, private router: Router, private  route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
      this.websiteID = params['websiteID'];
      this.pageID = params['pageID'];
      this.widgetID = params['widgetID'];
    });
    this.route.queryParams.subscribe(params => {
      this.type = params['type'];
    });
    this.widget = this.widgetService.findWidgetById(this.widgetID);
  }
}
