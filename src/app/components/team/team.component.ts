import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {SoccerServiceClient} from '../../services/soccer.service.client';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {


  teamID: string;
  team: any;
  errorFlag: boolean;
  errorMsg: string;
  teamDetailsType: string;
  currentDate: Date;
  formattedDate: string;
  leagueId: string;
  squad: any;
  sideLined: any;
  transfersIn: any;
  transfersOut: any;
  stats: any;
  compId: string;

  constructor(private soccerService: SoccerServiceClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentDate = new Date();
    this.formatDate();
    this.teamDetailsType = 'OVERVIEW';
    this.route.params.subscribe(params => {
      this.teamID = params['teamID'];
    });

    this.soccerService.getTeamInformation(this.teamID)
      .subscribe(
        (team: any) => {
          this.team = this.parseBody(team);
          this.squad = team.squad;
          this.sideLined = team.sidelined;
          this.transfersIn = team.transfers_in;
          this.transfersOut = team.transfers_out;
          this.stats = team.statistics;
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

  changeTeamDetailsType(type: string) {
    this.teamDetailsType = type;
  }

  formatDate() {
    const dd = this.currentDate.getDate();
    const mm = this.currentDate.getMonth() + 1;
    const yyyy = this.currentDate.getFullYear();
    this.formattedDate = (mm + '/' + dd + '/' + yyyy);
  }
}
