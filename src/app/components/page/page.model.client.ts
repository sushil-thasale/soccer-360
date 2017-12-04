export class Page {
  _id: string;
  name: string;
  websiteID: string;
  description: string;
  constructor(_id: string, name: string, websiteID: string, description: string) {
    this._id = _id;
    this.name = name;
    this.websiteID = websiteID;
    this.description = description;
  }
}
