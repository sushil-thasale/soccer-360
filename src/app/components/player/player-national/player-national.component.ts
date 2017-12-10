import {Component, OnChanges, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { SoccerServiceClient } from '../../../services/soccer.service.client';

@Component({
  selector: 'app-player-national',
  templateUrl: './player-national.component.html',
  styleUrls: ['./player-national.component.css']
})
export class PlayerNationalComponent implements OnInit {

  @Input() playerId: string;
  player: any;
  nationalSeasons: any;
  errorFlag: boolean;
  errorMsg: string;

  constructor(private soccerService: SoccerServiceClient) { }

  ngOnInit() {
    this.soccerService.getPlayerInformation(this.playerId)
      .subscribe(
        (player: any) => {
          this.player = this.parseBody(player);
          this.nationalSeasons = this.player.player_statistics.national;
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

