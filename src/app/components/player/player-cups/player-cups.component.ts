import {Component, OnChanges, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { SoccerServiceClient } from '../../../services/soccer.service.client';

@Component({
  selector: 'app-player-cups',
  templateUrl: './player-cups.component.html',
  styleUrls: ['./player-cups.component.css']
})
export class PlayerCupsComponent implements OnInit {

  @Input() playerId: string;
  player: any;
  cupSeasons: any;
  errorFlag: boolean;
  errorMsg: string;

  constructor(private soccerService: SoccerServiceClient) { }

  ngOnInit() {
    this.soccerService.getPlayerInformation(this.playerId)
      .subscribe(
        (player: any) => {
          this.player = this.parseBody(player);
          this.cupSeasons = this.player.player_statistics.cups;
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

