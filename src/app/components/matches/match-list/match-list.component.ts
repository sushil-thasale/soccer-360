import {Component, OnChanges, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { SoccerServiceClient } from '../../../services/soccer.service.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit, OnChanges {

  @Input() currDate: string;
  @Input() fromDate: string;
  @Input() toDate: string;
  @Input() compId: string;
  @Input() teamId: string;
  @Input() searchType: string;

  matches: any;

  constructor(private soccerService: SoccerServiceClient, private router: Router) { }

  ngOnInit() {
    switch (this.searchType) {
      case 'BY_DAY' : { this.getMatchesByDate(); break; }
      case 'PREVIOUS_COMP' : { this.getPreviousMatchesOfCompetition(); break; }
      case 'UPCOMING_COMP' : { this.getUpcomingMatchesOfCompetition(); break; }
      case 'PREVIOUS_TEAM' : { this.getPreviousMatchesOfTeam(); break; }
      case 'UPCOMING_TEAM' : { this.getUpcomingMatchesOfTeam(); break; }
    }
  }

  ngOnChanges() {
    this.ngOnInit();
  }

  getMatchesByDate() {
    this.soccerService
      .getMatchesByDate(this.currDate)
      .subscribe(
        (data: any) => {
          this.matches = this.parseBody(data);
        }
      );
  }

  getPreviousMatchesOfCompetition() {
    this.soccerService
      .getPreviousMatchesOfCompetition(this.compId, this.toDate)
      .subscribe(
        (data: any) => {
          this.matches = this.parseBody(data);
        }
      );
  }

  getUpcomingMatchesOfCompetition() {
    this.soccerService
      .getUpcomingMatchesOfCompetition(this.compId, this.fromDate)
      .subscribe(
        (data: any) => {
          this.matches = this.parseBody(data);
        }
      );
  }

  getPreviousMatchesOfTeam() {
    this.soccerService
      .getPreviousMatchesOfTeam(this.teamId, this.toDate)
      .subscribe(
        (data: any) => {
          this.matches = this.parseBody(data);
        }
      );
  }

  getUpcomingMatchesOfTeam() {
    this.soccerService
      .getUpcomingMatchesOfTeam(this.teamId, this.fromDate)
      .subscribe(
        (data: any) => {
          this.matches = this.parseBody(data);
        }
      );
  }

  parseBody(data: any) {
    let val = data._body;
    val = JSON.parse(val);
    return val;
  }

  navigateToMatchDetails(matchId: string) {
    this.router.navigate(['/match', matchId]);
  }
}
