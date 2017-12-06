import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {SoccerServiceClient} from '../../../../services/soccer.service.client';

@Component({
  selector: 'app-match-player-stats',
  templateUrl: './match-player-stats.component.html',
  styleUrls: ['./match-player-stats.component.css']
})
export class MatchPlayerStatsComponent implements OnInit {

  @Input() matchID: string;
  match: any;
  localTeamPlayers: string[];
  visitorTeamPlayers: string[];
  selectedPlayer: string;
  playerStats: any;
  selectedPlayerStats: any;
  errorFlag: boolean;
  errorMsg: string;

  constructor(private soccerService: SoccerServiceClient) { }

  ngOnInit() {

    // match details - local-team-name & away-team-name
    this.soccerService.getMatchDetails(this.matchID)
      .subscribe(
        (matchDetails: any) => {
          this.match = this.parseBody(matchDetails);
          this.errorFlag = false;
        }, (error) => {
          console.log(error);
          this.errorFlag = true;
          this.errorMsg = 'Unable to retrieve match details!';
        });

    // all player stats
    this.soccerService.getMatchCommentary(this.matchID)
      .subscribe(
        (matchCommentary: any) => {
          const commentary = this.parseBody(matchCommentary);
          this.playerStats = commentary.player_stats;
          this.errorFlag = false;
          if (this.playerStats) {
            this.localTeamPlayers = this.getPlayerNames('localteam');
            this.visitorTeamPlayers = this.getPlayerNames('visitorteam');
          }
        }, (error) => {
          console.log(error);
          this.errorFlag = true;
          this.errorMsg = 'Unable to retrieve player stats!';
        });
  }

  parseBody(data: any) {
    let val = data._body;
    val = JSON.parse(val);
    return val;
  }

  getPlayerNames(teamType: string) {
    const playerNames: string[] = [];

    if (teamType === 'localteam') {
      for (let i = 0; i < this.playerStats.localteam.player.length; i++) {
        playerNames.push(this.playerStats.localteam.player[i].name);
      }
    } else if (teamType === 'visitorteam') {
      for (let i = 0; i < this.playerStats.visitorteam.player.length; i++) {
        playerNames.push(this.playerStats.visitorteam.player[i].name);
      }
    }

    return playerNames;
  }
}
