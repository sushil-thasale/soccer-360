import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { User } from '../components/user/user.model.client';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';

// injecting service into module
@Injectable()

export class UserService {

  constructor(private http: Http) { }

  api = {
    'createUser'   : this.createUser,
    'findUserByCredentials' : this.findUserByCredentials,
    // 'findUserByUsername' : this.findUserByUsername,
    'findUserById' : this.findUserById,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser
  };

  baseUrl: string = environment.baseUrl;

  createUser(username: string, password: string) {
    const url: string = this.baseUrl + '/api/user';
    // const user: User = new User('', username, password, '', '', '');
    const user = {'username': username, 'password': password};
    return this.http.post(url, user)
      .map((res: Response) => {
        console.log('createUser service client ' + res.json());
        return res.json();
      });
  }

  findUserByUsername(username: string) {
    const url: string = this.baseUrl + '/api/user?username=' + username;
    return this.http.get(url)
      .map((res: Response) => {
        console.log('findUserByUsername service client ' + res.json());
        return res.json();
      });
  }

  findUserByCredentials(username: string, password: string) {
    const url: string = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  findUserById(userId: string) {
    const url: string = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  updateUser(userId: string, user: User) {
    const url: string = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user)
      .map((res: Response) => {
          return res.json();
        });
  }

  deleteUser(userId: string) {
    const url: string = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url)
      .map((res: Response) => {
        return res.json();
      });
  }
}
