import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { User } from '../components/user/user.model.client';

// injecting service into module
@Injectable()

export class UserService {

  constructor() { }

  users: User[] = [
    new User ( '123', 'alice', 'alice', 'Alice', 'Wonder'),
    new User ( '234', 'bob', 'bob', 'Bob', 'Marley'),
    new User ( '345', 'charly', 'charly', 'Charly', 'Garcia'),
    new User ( '456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi')
  ];

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser
  };

  createUser(userID: string, username: string, password: string, firstname: string, lastname: string) {
    const user: User = new User(userID, username, password, firstname, lastname);
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

  updateUser(userId: string, user: any) {  }

  deleteUser(userId: string) {  }
}
