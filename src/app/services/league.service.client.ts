import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';

// injecting service into module
@Injectable()

export class LeagueService {

  constructor(private http: Http) { }

  api = {
    'followLeague'   : this.followLeague,
    'unfollowLeague' : this.unfollowLeague,
    'findLeagueById' : this.findLeagueById,
    'findLeaguesForUser' : this.findLeaguesForUser,
    'searchLeaguesByName' : this.searchLeaguesByName
  };

  baseUrl: string = environment.baseUrl;

  searchLeaguesByName(userID: string, keyword: string) {
    const url: string = this.baseUrl + '/api/user/' + userID + '/league/' + keyword;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  findLeaguesForUser(userID: string) {
    const url: string = this.baseUrl + '/api/user/' + userID + '/league';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  findLeagueById(leagueID: string) {
    const url: string = this.baseUrl + '/api/league/' + leagueID;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  followLeague(userID: string, leagueID: string) {
    const url: string = this.baseUrl + '/api/user/' + userID + '/followLeague';
    return this.http.get(url, leagueID)
      .map((res: Response) => {
        return res.json();
      });
  }

  unfollowLeague(userID: string, leagueID: string) {
    const url: string = this.baseUrl + '/api/user/' + userID + '/unfollowLeague';
    return this.http.get(url, leagueID)
      .map((res: Response) => {
        return res.json();
      });
  }
}
