import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { User } from '../components/user/user.model.client';
import { environment } from '../../environments/environment';
import { Http, Response, RequestOptions } from '@angular/http';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class UserService {

  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router) { }

  api = {
    'createUser'   : this.createUser,
    'findUserByCredentials' : this.findUserByCredentials,
    // 'findUserByUsername' : this.findUserByUsername,
    'findUserById' : this.findUserById,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser,
    'followUser' : this.followUser,
    'unfollowUser' : this.unfollowUser,
    'findFollowing' : this.findFollowing,
    'findFollowers' : this.findFollowers,
    'getUsersByName' : this.getUsersByName,
    'getAllUsers' : this.getAllUsers,
    'getAllCritics' : this.getAllCritics,
    'demoteToUser': this.demoteToUser,
  };

  baseUrl: string = environment.baseUrl;
  options = new RequestOptions();

  demoteToUser(criticId: string) {
    const url: string = this.baseUrl + '/api/user/demote/' + criticId;
    const body = {};
    return this.http.put(url, body)
      .map((res: Response) => {
        return res.json();
      });
  }

  getAllCritics() {
    const url: string = this.baseUrl + '/api/allCritics';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  getAllUsers() {
    const url: string = this.baseUrl + '/api/allUsers';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  getUsersByName(userKeyword: string) {
    const url: string = this.baseUrl + '/api/users/' + userKeyword;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  findFollowing(userID: string) {
    const url: string = this.baseUrl + '/api/user/' + userID + '/following';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  findFollowers(userID: string) {
    const url: string = this.baseUrl + '/api/user/' + userID + '/followers';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  login(username: string, password: string) {
    this.options.withCredentials = true;

    const body = {
      username : username,
      password : password
    };
    const url: string = this.baseUrl + '/api/login';
    return this.http.post(url, body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  logout() {
    this.options.withCredentials = true;
    const url: string = this.baseUrl + '/api/logout';
    return this.http.post(url, '', this.options)
      .map(
        (res: Response) => {
          const data = res;
        }
      );
  }

  register(username: String, password: String) {

    this.options.withCredentials = true;
    const user = {
      username : username,
      password : password
    };
    const url: string = this.baseUrl + '/api/register';
    return this.http.post(url, user, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  loggedIn() {
    this.options.withCredentials = true;
    const url: string = this.baseUrl + '/api/loggedIn';
    return this.http.post(url, '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== 0) {
            this.sharedService.user = user;
            return true;
          } else if (user === 0) {
            return false;
          }
        }
      );
  }

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

  followUser(userId: string, followUserId: string) {
    const body = {
      followUserId : followUserId
    };
    const url: string = this.baseUrl + '/api/user/' + userId + '/follow';
    return this.http.put(url, body)
      .map((res: Response) => {
        return res.json();
      });
  }

  unfollowUser(userId: string, unfollowUserId: string) {
    const body = {
      unfollowUserId : unfollowUserId
    };
    const url: string = this.baseUrl + '/api/user/' + userId + '/unfollow';
    return this.http.put(url, body)
      .map((res: Response) => {
        return res.json();
      });
  }
}
