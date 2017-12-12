import {Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import { Input } from '@angular/core';
import {SoccerServiceClient} from '../../../../services/soccer.service.client';

@Component({
  selector: 'app-match-team-standings',
  templateUrl: './match-team-standings.component.html',
  styleUrls: ['./match-team-standings.component.css']
})
export class MatchTeamStandingsComponent implements OnInit, OnChanges {

  @Input() compId: string;
  errorFlag: boolean;
  errorMsg: string;
  standings: any;

  constructor(private soccerService: SoccerServiceClient) { }

  ngOnInit() {

    // match commentary - lineup & bench
    this.soccerService.getCompetitionStandings(this.compId)
      .subscribe(
        (compDetails: any) => {
          this.standings = this.parseBody(compDetails);
          this.standings.sort((t1, t2) => Number(t1.position) - Number(t2.position));
          this.errorFlag = false;
        }, (error) => {
          console.log(error + ' unable to retrieve competition standings!');
          this.errorFlag = true;
          this.errorMsg = 'Unable to retrieve competition standings!';
        });
  }

  ngOnChanges() {
    this.ngOnInit();
  }

  parseBody(data: any) {
    let val = data._body;
    val = JSON.parse(val);
    return val;
  }
}
