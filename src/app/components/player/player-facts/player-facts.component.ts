import {Component, OnChanges, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { SoccerServiceClient } from '../../../services/soccer.service.client';

@Component({
  selector: 'app-player-facts',
  templateUrl: './player-facts.component.html',
  styleUrls: ['./player-facts.component.css']
})
export class PlayerFactsComponent implements OnInit {

  @Input() playerId: string;
  player: any;
  errorFlag: boolean;
  errorMsg: string;

  constructor(private soccerService: SoccerServiceClient) { }

  ngOnInit() {
    this.soccerService.getPlayerInformation(this.playerId)
      .subscribe(
        (player: any) => {
          this.player = this.parseBody(player);
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

