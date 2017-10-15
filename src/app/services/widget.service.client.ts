import { Injectable } from '@angular/core';
import 'rxjs/Rx';

// injecting service into module
@Injectable()

export class WidgetService {

  constructor() { }

  widgets: any[] = [
    { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': '2', 'text': 'GIZMODO'},
    { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': '4', 'text': 'Lorem ipsum'},
    { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
      'url': 'http://lorempixel.com/400/200/'},
    { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
    { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': '4', 'text': 'Lorem ipsum'},
    { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
      'url': 'https://youtu.be/AM2Ivdi9c4E' },
    { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}
  ];

  api = {
    'createWidget'   : this.createWidget,
    'findWidgetsByPageId' : this.findWidgetsByPageId,
    'findWidgetById': this.findWidgetById,
    'updateWidget': this.updateWidget,
    'deleteWidget': this.deleteWidget
  };

  createWidget (pageID: string, widget: any) {
    const _id: string = '' + (new Date()).getTime();
    widget._id = _id;
    widget.pageId = pageID;
    this.widgets.push(widget);
    return widget;
  }

  findWidgetsByPageId (pageID: string) {
    const pageWidgets: any[] = [];
    for (let i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i].pageId === pageID) {
        pageWidgets.push(this.widgets[i]);
      }
    }
    return pageWidgets;
  }

  findWidgetById (widgetID: string) {
    for (let i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i]._id === widgetID) {
        return this.widgets[i];
      }
    }
    return null;
  }

  updateWidget (widgetID: string, newWidget: any) {
    for ( let i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i]._id === widgetID) {
        if (this.widgets[i].widgetType === 'IMAGE' || this.widgets[i].widgetType === 'YOUTUBE') {
          this.widgets[i].width = newWidget.width;
          this.widgets[i].url = newWidget.url;
          return this.widgets[i];
        } else if (this.widgets[i].widgetType === 'HEADING') {
          this.widgets[i].text = newWidget.text;
          this.widgets[i].size = newWidget.size;
          return this.widgets[i];
        } else if (this.widgets[i].widgetType === 'HTML') {
          this.widgets[i].text = newWidget.text;
          return this.widgets[i];
        }
      }
    }
    return null;
  }

  deleteWidget (widgetID: string) {
    for ( let i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i]._id === widgetID) {
        this.widgets.splice(i, 1);
      }
    }
  }
}
