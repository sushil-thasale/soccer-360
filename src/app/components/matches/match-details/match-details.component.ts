import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {SoccerServiceClient} from '../../../services/soccer.service.client';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {

  matchID: string;
  match: any;
  errorFlag: boolean;
  errorMsg: string;
  matchDetailsType: string;

  constructor(private soccerService: SoccerServiceClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.matchDetailsType = 'FACTS';
    this.route.params.subscribe(params => {
      this.matchID = params['matchID'];
    });

    this.soccerService.getMatchDetails(this.matchID)
      .subscribe(
        (match: any) => {
          this.match = this.parseBody(match);
          this.errorFlag = false;
          console.log(match);
        }, (error) => {
          this.errorFlag = true;
          this.errorMsg = 'Unable to retrieve match details!';
        });
  }

  parseBody(data: any) {
    let val = data._body;
    val = JSON.parse(val);
    return val;
  }

  changeMatchDetailsType(type: string) {
    this.matchDetailsType = type;
  }
}
