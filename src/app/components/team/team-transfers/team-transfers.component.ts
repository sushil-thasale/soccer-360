import {Component, OnChanges, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { SoccerServiceClient } from '../../../services/soccer.service.client';

@Component({
  selector: 'app-team-transfers',
  templateUrl: './team-transfers.component.html',
  styleUrls: ['./team-transfers.component.css']
})
export class TeamTransfersComponent implements OnInit {

  @Input() teamId: string;
  team: any;
  transfersIn: any;
  transfersOut: any;
  errorFlag: boolean;
  errorMsg: string;

  constructor(private soccerService: SoccerServiceClient) { }

  ngOnInit() {
    this.soccerService.getTeamInformation(this.teamId)
      .subscribe(
        (team: any) => {
          this.team = this.parseBody(team);
          this.transfersIn = this.team.transfers_in;
          this.transfersOut = this.team.transfers_out;
          this.errorFlag = false;
        }, (error) => {
          this.errorFlag = true;
          this.errorMsg = 'Unable to retrieve team details!';
        });
  }

  parseBody(data: any) {
    let val = data._body;
    val = JSON.parse(val);
    return val;
  }
}

