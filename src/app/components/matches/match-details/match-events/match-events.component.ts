import { Component, OnInit } from '@angular/core';
import {SoccerServiceClient} from '../../../../services/soccer.service.client';
import { Input } from '@angular/core';

@Component({
  selector: 'app-match-events',
  templateUrl: './match-events.component.html',
  styleUrls: ['./match-events.component.css']
})
export class MatchEventsComponent implements OnInit {

  @Input() matchID: string;
  errorFlag: boolean;
  errorMsg: string;
  match: any;
  matchEvents: any;

  constructor(private soccerService: SoccerServiceClient) { }

  ngOnInit() {

    // match details
    this.soccerService.getMatchDetails(this.matchID)
      .subscribe(
        (match: any) => {
          this.match = this.parseBody(match);
          this.matchEvents = this.match.events;
          this.errorFlag = false;
        }, (error) => {
          this.errorFlag = true;
          this.errorMsg = 'Unable to retrieve match details!';
          console.log(error + ' unable to retrieve match events!');
        });
  }

  parseBody(data: any) {
    let val = data._body;
    val = JSON.parse(val);
    return val;
  }
}
