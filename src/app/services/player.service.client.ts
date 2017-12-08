import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';

// injecting service into module
@Injectable()

export class PlayerService {

  constructor(private http: Http) { }

  api = {
    'followPlayer'   : this.followPlayer,
    'unfollowPlayer' : this.unfollowPlayer,
    'findPlayerById' : this.findPlayerById,
    'findPlayersForUser' : this.findPlayersForUser,
    'searchPlayersByName' : this.searchPlayersByName
  };

  baseUrl: string = environment.baseUrl;

  searchPlayersByName(userID: string, keyword: string) {
    const url: string = this.baseUrl + '/api/user/' + userID + '/player/' + keyword;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  findPlayersForUser(userID: string) {
    const url: string = this.baseUrl + '/api/user/' + userID + '/player';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  findPlayerById(playerID: string) {
    const url: string = this.baseUrl + '/api/player/' + playerID;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  followPlayer(userID: string, playerID: string) {
    const body = {
      playerId : playerID
    };
    const url: string = this.baseUrl + '/api/user/' + userID + '/followPlayer';
    return this.http.put(url, body)
      .map((res: Response) => {
        return res;
      });
  }

  unfollowPlayer(userID: string, playerID: string) {
    const body = {
      playerId : playerID
    };
    const url: string = this.baseUrl + '/api/user/' + userID + '/unfollowPlayer';
    return this.http.put(url, body)
      .map((res: Response) => {
        return res;
      });
  }
}
