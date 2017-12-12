import { Component, OnInit, ViewChild } from '@angular/core';
import {SoccerServiceClient} from '../../../../services/soccer.service.client';
import { Input } from '@angular/core';

@Component({
  selector: 'app-match-stats',
  templateUrl: './match-stats.component.html',
  styleUrls: ['./match-stats.component.css']
})
export class MatchStatsComponent implements OnInit {

  @Input() matchID: string;
  errorFlag: boolean;
  errorMsg: string;
  stats: any;
  localTeamStats: any;
  awayTeamStats: any;

  constructor(private soccerService: SoccerServiceClient) { }

  ngOnInit() {

    // match commentary - lineup & bench
    this.soccerService.getMatchCommentary(this.matchID)
      .subscribe(
        (match: any) => {
          const commentary = this.parseBody(match);
          this.stats = commentary.match_stats;
          this.localTeamStats = this.stats.localteam[0];
          this.awayTeamStats = this.stats.visitorteam[0];
          this.errorFlag = false;
        }, (error) => {
          console.log(error + ' unable to retrieve match stats!');
          this.errorFlag = true;
          this.errorMsg = 'Unable to retrieve match stats!';
        });
  }

  parseBody(data: any) {
    let val = data._body;
    val = JSON.parse(val);
    return val;
  }
}
