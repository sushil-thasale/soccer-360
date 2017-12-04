export class Widget {
  _id: string;
  widgetType: string;
  pageID: string;
  size: number;
  text: string;
  constructor(_id: string, widgetType: string, pageID: string, size: number, text: string) {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageID = pageID;
    this.size = size;
    this.text = text;
  }
}
