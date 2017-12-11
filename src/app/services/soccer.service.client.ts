import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Http } from '@angular/http';

// injecting service into module
@Injectable()

export class SoccerServiceClient {

  environment = {
    apiBaseUrl : 'http://api.football-api.com/2.0/',
    apiKey : '565ec012251f932ea4000001a46ed46b60254449570215f2e161e291',
  };

  urlBase = this.environment.apiBaseUrl + 'SEARCHDOMAIN' + '?' + 'SEARCHQUERY' + 'Authorization=' + this.environment.apiKey;

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
    'getPreviousMatchesOfCompetition': this.getPreviousMatchesOfCompetition,
    'getPreviousMatchesOfTeam': this.getPreviousMatchesOfTeam,
  };

  requestData(searchDomain: string, searchQuery: string) {
    const url = this.urlBase
      .replace('SEARCHDOMAIN', searchDomain)
      .replace('SEARCHQUERY', searchQuery);
    return this.http.get(url);
  }

  getPreviousMatchesOfCompetition(compId: string, toDate: string) {
    const fromDate = '7/1/2017';
    const searchDomain = 'matches';
    const searchQuery = 'comp_id=' + compId + '&from_date=' + fromDate + '&to_date=' + toDate + '&';
    return this.requestData(searchDomain, searchQuery);
  }

  getPreviousMatchesOfTeam(teamId: string, toDate: string) {
    const fromDate = '7/1/2017';
    const searchDomain = 'matches';
    const searchQuery = 'team_id=' + teamId + '&from_date=' + fromDate + '&to_date=' + toDate + '&';
    return this.requestData(searchDomain, searchQuery);
  }

  getUpcomingMatchesOfCompetition(compId: string, fromDate: string) {
    const toDate = '7/1/2018';
    const searchDomain = 'matches';
    const searchQuery = 'comp_id=' + compId + '&from_date=' + fromDate + '&to_date=' + toDate + '&';
    return this.requestData(searchDomain, searchQuery);
  }

  getUpcomingMatchesOfTeam(teamId: string, fromDate: string) {
    const toDate = '7/1/2018';
    const searchDomain = 'matches';
    const searchQuery = 'team_id=' + teamId + '&from_date=' + fromDate + '&to_date=' + toDate + '&';
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
