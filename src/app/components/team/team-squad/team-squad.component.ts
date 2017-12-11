import {Component, OnChanges, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { SoccerServiceClient } from '../../../services/soccer.service.client';

@Component({
  selector: 'app-team-squad',
  templateUrl: './team-squad.component.html',
  styleUrls: ['./team-squad.component.css']
})
export class TeamSquadComponent implements OnInit {

  @Input() teamId: string;
  team: any;
  squad: any;
  sideLined: any;
  errorFlag: boolean;
  errorMsg: string;

  constructor(private soccerService: SoccerServiceClient) { }

  ngOnInit() {
    this.soccerService.getTeamInformation(this.teamId)
      .subscribe(
        (team: any) => {
          this.team = this.parseBody(team);
          this.squad = this.team.squad;
          this.sideLined = this.team.sidelined;
          this.errorFlag = false;
          // console.log(this.team);
          // console.log(this.squad);
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
