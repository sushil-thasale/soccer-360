import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';

// injecting service into module
@Injectable()

export class TeamService {

  constructor(private http: Http) { }

  api = {
    'followTeam'   : this.followTeam,
    'unfollowTeam' : this.unfollowTeam,
    'findTeamById' : this.findTeamById,
    'findTeamsForUser' : this.findTeamsForUser,
    'searchTeamsByName' : this.searchTeamsByName
  };

  baseUrl: string = environment.baseUrl;

  searchTeamsByName(userID: string, keyword: string) {
    const url: string = this.baseUrl + '/api/user/' + userID + '/team/' + keyword;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  findTeamsForUser(userID: string) {
    const url: string = this.baseUrl + '/api/user/' + userID + '/team';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  findTeamById(teamID: string) {
    const url: string = this.baseUrl + '/api/team/' + teamID;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  followTeam(userID: string, teamID: string) {
    const body = {
      teamId : teamID
    };
    const url: string = this.baseUrl + '/api/user/' + userID + '/followTeam';
    return this.http.put(url, body)
      .map((res: Response) => {
        return res;
      });
  }

  unfollowTeam(userID: string, teamID: string) {
    const body = {
      teamId : teamID
    };
    const url: string = this.baseUrl + '/api/user/' + userID + '/unfollowTeam';
    return this.http.put(url, body)
      .map((res: Response) => {
        return res;
      });
  }
}
