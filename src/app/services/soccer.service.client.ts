import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

// injecting service into module
@Injectable()

export class SoccerServiceClient {

  urlBase = environment.apiBaseUrl + 'SEARCHDOMAIN' + '?' + 'SEARCHQUERY' + 'Authorization=' + environment.apiKey;

  constructor(private http: Http) {
  }

  api = {
    'getMatchesByDate': this.getMatchesByDate,
    'getAllCompetitions': this.getAllCompetitions,
    'getCompetitionById': this.getCompetitionById,
    'getCompetitionStandings': this.getCompetitionStandings,
    'getMatchCommentary': this.getMatchCommentary,
    'getTeamInformation': this.getTeamInformation,
    'getPlayerInformation': this.getPlayerInformation,
    'getMatchDetails': this.getMatchDetails,
    'getMatchesByTeam': this.getMatchesByTeam,
    'getMatchesByCompetition': this.getMatchesByCompetition,
    'getUpcomingMatchesOfTeam': this.getUpcomingMatchesOfTeam,
    'getUpcomingMatchesOfCompetition': this.getUpcomingMatchesOfCompetition,
  };

  requestData(searchDomain: string, searchQuery: string) {
    const url = this.urlBase
      .replace('SEARCHDOMAIN', searchDomain)
      .replace('SEARCHQUERY', searchQuery);
    return this.http.get(url);
  }

  getUpcomingMatchesOfCompetition(compId: string, fromDate: string) {
    const searchDomain = 'matches';
    const searchQuery = 'comp_id=' + compId + '&from_date=' + fromDate + '&';
    return this.requestData(searchDomain, searchQuery);
  }

  getUpcomingMatchesOfTeam(teamId: string, fromDate: string) {
    const searchDomain = 'matches';
    const searchQuery = 'team_id=' + teamId + '&from_date=' + fromDate + '&';
    return this.requestData(searchDomain, searchQuery);
  }

  getMatchesByDate(date: string) {
    const searchDomain = 'matches';
    const searchQuery = 'match_date=' + date + '&';
    return this.requestData(searchDomain, searchQuery);
  }

  getMatchesByTeam(teamId: string) {
    const searchDomain = 'matches';
    const searchQuery = 'team_id=' + teamId + '&';
    return this.requestData(searchDomain, searchQuery);
  }

  getMatchesByCompetition(compId: string) {
    const searchDomain = 'matches';
    const searchQuery = 'comp_id=' + compId + '&';
    return this.requestData(searchDomain, searchQuery);
  }

  getAllCompetitions() {
    const searchDomain = 'competitions';
    const searchQuery = '';
    return this.requestData(searchDomain, searchQuery);
  }

  getCompetitionById(compId: string) {
    const searchDomain = 'competitions/' + compId;
    const searchQuery = '';
    return this.requestData(searchDomain, searchQuery);
  }

  getCompetitionStandings(compId: string) {
    const searchDomain = 'standings/' + compId;
    const searchQuery = '';
    return this.requestData(searchDomain, searchQuery);
  }

  getMatchCommentary(matchId: string) {
    const searchDomain = 'commentaries/' + matchId;
    const searchQuery = '';
    return this.requestData(searchDomain, searchQuery);
  }

  getTeamInformation(teamID: string) {
    const searchDomain = 'team/' + teamID;
    const searchQuery = '';
    return this.requestData(searchDomain, searchQuery);
  }

  getPlayerInformation(playerId: string) {
    const searchDomain = 'player/' + playerId;
    const searchQuery = '';
    return this.requestData(searchDomain, searchQuery);
  }

  getMatchDetails(matchId: string) {
    const searchDomain = 'matches/' + matchId;
    const searchQuery = '';
    return this.requestData(searchDomain, searchQuery);
  }
}
