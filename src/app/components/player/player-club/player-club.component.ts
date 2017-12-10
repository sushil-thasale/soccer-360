import {Component, OnChanges, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { SoccerServiceClient } from '../../../services/soccer.service.client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-club',
  templateUrl: './player-club.component.html',
  styleUrls: ['./player-club.component.css']
})
export class PlayerClubComponent implements OnInit {

  @Input() playerId: string;
  player: any;
  leaguesSeasons: any;
  errorFlag: boolean;
  errorMsg: string;

  constructor(private soccerService: SoccerServiceClient) { }

  ngOnInit() {
    this.soccerService.getPlayerInformation(this.playerId)
      .subscribe(
        (player: any) => {
          this.player = this.parseBody(player);
          this.leaguesSeasons = this.player.player_statistics.club;
          this.errorFlag = false;
        }, (error) => {
          this.errorFlag = true;
          this.errorMsg = 'Unable to retrieve player details!';
        });
  }

  parseBody(data: any) {
    let val = data._body;
    val = JSON.parse(val);
    return val;
  }
}

