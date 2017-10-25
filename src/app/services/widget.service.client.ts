import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';

// injecting service into module
@Injectable()

export class WidgetService {

  constructor(private http: Http) { }

  api = {
    'createWidget'   : this.createWidget,
    'findWidgetsByPageId' : this.findWidgetsByPageId,
    'findWidgetById': this.findWidgetById,
    'updateWidget': this.updateWidget,
    'deleteWidget': this.deleteWidget
  };

  widgets: any[];
  baseUrl: string = environment.baseUrl;

  createWidget (pageID: string, widget: any) {
    const url: string = this.baseUrl + '/api/page/' + pageID + '/widget';
    return this.http.post(url, widget)
      .map((res: Response) => {
        return res.json();
      });
  }

  findWidgetsByPageId (pageID: string) {
    const url: string = this.baseUrl + '/api/page/' + pageID + '/widget';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  findWidgetById (widgetID: string) {
    const url: string = this.baseUrl + '/api/widget/' + widgetID;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  updateWidget (widgetID: string, newWidget: any) {
    const url: string = this.baseUrl + '/api/widget/' + widgetID;
    return this.http.put(url, newWidget)
      .map((res: Response) => {
        return res.json();
      });
  }

  deleteWidget (widgetID: string) {
    const url: string = this.baseUrl + '/api/widget/' + widgetID;
    return this.http.delete(url)
      .map((res: Response) => {
        return res.status;
      });
  }
}
