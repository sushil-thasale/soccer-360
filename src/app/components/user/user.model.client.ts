export class User {
  userID: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  constructor(userID: string, username: string, password: string, firstname: string, lastname: string) {
    this.userID = userID;
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
