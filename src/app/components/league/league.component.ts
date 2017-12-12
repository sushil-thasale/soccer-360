import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {SoccerServiceClient} from '../../services/soccer.service.client';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  leagueID: string;
  league: any;
  errorFlag: boolean;
  errorMsg: string;
  leagueDetailsType: string;
  currentDate: Date;
  formattedDate: string;
  isSelected: boolean;
  reviewId: string;

  constructor(private soccerService: SoccerServiceClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.isSelected = false;
    this.currentDate = new Date();
    this.formatDate();
    this.leagueDetailsType = 'STANDINGS';
    this.route.params.subscribe(params => {
      this.leagueID = params['leagueID'];
      this.soccerService.getCompetitionById(this.leagueID)
        .subscribe(
          (league: any) => {
            this.league = this.parseBody(league);
            this.errorFlag = false;
            // console.log(league);
          }, (error) => {
            this.errorFlag = true;
            this.errorMsg = 'Unable to retrieve league details!';
          });
    });
  }

  parseBody(data: any) {
    let val = data._body;
    val = JSON.parse(val);
    return val;
  }

  changeLeagueDetailsType(type: string) {
    this.leagueDetailsType = type;
  }

  formatDate() {
    const dd = this.currentDate.getDate();
    const mm = this.currentDate.getMonth() + 1;
    const yyyy = this.currentDate.getFullYear();
    this.formattedDate = (mm + '/' + dd + '/' + yyyy);
  }

  updateReviewSelection(isSelected: boolean, reviewId: string) {
    this.isSelected = isSelected;
    this.reviewId = reviewId;
  }
}
