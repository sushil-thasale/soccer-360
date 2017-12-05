import { Component, OnInit, ViewChild } from '@angular/core';
import {SoccerServiceClient} from '../../../../services/soccer.service.client';
import { Input } from '@angular/core';

@Component({
  selector: 'app-match-lineup',
  templateUrl: './match-lineup.component.html',
  styleUrls: ['./match-lineup.component.css']
})
export class MatchLineupComponent implements OnInit {

  @Input() matchID: string;
  lineup: any;
  subs: any;
  errorFlag: boolean;
  errorMsg: string;

  constructor(private soccerService: SoccerServiceClient) { }

  ngOnInit() {

    // match commentary - lineup & bench
    this.soccerService.getMatchCommentary(this.matchID)
      .subscribe(
        (match: any) => {
          const commentary = this.parseBody(match);
          this.lineup = commentary.lineup;
          this.subs = commentary.subs;
          this.errorFlag = false;
        }, (error) => {
          console.log(error);
          this.errorFlag = true;
          this.errorMsg = 'Unable to retrieve match lineup!';
        });
  }

  parseBody(data: any) {
    let val = data._body;
    val = JSON.parse(val);
    return val;
  }
}
