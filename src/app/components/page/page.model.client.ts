export class Page {
  _id: string;
  name: string;
  websiteID: string;
  title: string;
  constructor(_id: string, name: string, websiteID: string, title: string) {
    this._id = _id;
    this.name = name;
    this.websiteID = websiteID;
    this.title = title;
  }
}
