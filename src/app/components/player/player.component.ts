import {Component, OnChanges, OnInit} from '@angular/core';
import { SoccerServiceClient } from '../../services/soccer.service.client';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  playerID: string;
  player: any;
  playerDetailsType: string;
  errorFlag: boolean;
  errorMsg: string;
  isSelected: boolean;
  reviewId: string;

  constructor(private soccerService: SoccerServiceClient,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.playerDetailsType = 'FACTS';
    this.route.params.subscribe(params => {
      this.playerID = params['playerID'];
      this.soccerService.getPlayerInformation(this.playerID)
        .subscribe(
          (player: any) => {
            this.player = this.parseBody(player);
            this.errorFlag = false;
          }, (error) => {
            this.errorFlag = true;
            this.errorMsg = 'Unable to retrieve player details!';
          });
    });
  }

  parseBody(data: any) {
    let val = data._body;
    val = JSON.parse(val);
    return val;
  }

  changePlayerDetailsType(type: string) {
    this.playerDetailsType = type;
  }

  updateReviewSelection(isSelected: boolean, reviewId: string) {
    this.isSelected = isSelected;
    this.reviewId = reviewId;
  }
}

