export class Website {
  _id: string;
  name: string;
  developerID: string;
  description: string;
  constructor(_id: string, name: string, developerID: string, description: string) {
    this._id = _id;
    this.name = name;
    this.developerID = developerID;
    this.description = description;
  }
}
