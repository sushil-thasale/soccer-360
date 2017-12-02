export class User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;

  constructor(_id: string, username: string, password: string, firstname: string, lastname: string, email: string) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.firstName = firstname;
    this.lastName = lastname;
    this.email = email;
  }
}
