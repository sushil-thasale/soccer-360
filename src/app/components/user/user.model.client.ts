export class User {
  userID: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  constructor(userID: string, username: string, password: string, firstname: string, lastname: string, email: string) {
    this.userID = userID;
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }
}
