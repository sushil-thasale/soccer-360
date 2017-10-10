import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { User } from '../components/user/user.model.client';

// injecting service into module
@Injectable()

export class UserService {

  constructor() { }

  users: User[] = [
    new User ( '123', 'alice', 'alice', 'Alice', 'Wonder', 'alice@gmail.com'),
    new User ( '234', 'bob', 'bob', 'Bob', 'Marley', 'bob@gmail.com'),
    new User ( '345', 'charly', 'charly', 'Charly', 'Garcia', 'chaly@gmail.com'),
    new User ( '456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi', 'jose@gmail.com')
  ];

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser
  };

  createUser(username: string, password: string) {
    const userID: string = '' + Math.random;
    const user: User = new User(userID, username, password, '', '', '');
    this.users.push(user);
    return user;
  }

  findUserById(userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].userID === userId) {  return this.users[x]; }
    }
  }

  findUserByUsername(username: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) {  return this.users[x]; }
    }
  }

  updateUser(userId: string, user: User) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].userID === userId) {
        this.users[x].username = user.username;
        this.users[x].password = user.password;
        this.users[x].firstname = user.firstname;
        this.users[x].lastname = user.lastname;
        this.users[x].email = user.email;
        return this.users[x];
      }
    }
  }

  deleteUser(userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].userID === userId) {
        this.users.splice(x, 1);
      }
    }
  }
}
