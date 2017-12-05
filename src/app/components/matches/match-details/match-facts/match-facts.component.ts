import { Component, OnInit, ViewChild } from '@angular/core';
import {SoccerServiceClient} from '../../../../services/soccer.service.client';
import { Input } from '@angular/core';

@Component({
  selector: 'app-match-facts',
  templateUrl: './match-facts.component.html',
  styleUrls: ['./match-facts.component.css']
})
export class MatchFactsComponent implements OnInit {

  @Input() matchID: string;
  match: any;
  errorFlag: boolean;
  errorMsg: string;
  competition: any;

  constructor(private soccerService: SoccerServiceClient) { }

  ngOnInit() {

    // match details
    this.soccerService.getMatchDetails(this.matchID)
      .subscribe(
        (match: any) => {
          this.match = this.parseBody(match);
          this.errorFlag = false;
          this.getCompetition();
        }, (error) => {
          this.errorFlag = true;
          this.errorMsg = 'Unable to retrieve match details!';
        });
  }

  getCompetition() {
    this.soccerService.getCompetitionById(this.match.comp_id)
      .subscribe(
        (competition: any) => {
          this.competition = this.parseBody(competition );
          this.errorFlag = false;
        }, (error) => {
          this.errorFlag = true;
          this.errorMsg = 'Unable to retrieve competition details!';
        });
  }

  parseBody(data: any) {
    let val = data._body;
    val = JSON.parse(val);
    return val;
  }
}
