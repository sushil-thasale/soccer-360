import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { LeagueService } from '../../../services/league.service.client';
import { TeamService } from '../../../services/team.service.client';
import { PlayerService } from '../../../services/player.service.client';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-home-user-profile',
  templateUrl: './home-user-profile.component.html',
  styleUrls: ['./home-user-profile.component.css']
})
export class HomeUserProfileComponent implements OnInit {

  leagues: any;
  teams: any;
  players: any;
  user: any;
  userID: string;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private leagueService: LeagueService,
              private teamService: TeamService,
              private playerService: PlayerService,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.leagues = [];
    this.teams = [];
    this.players = [];

    // get user profile from SharedService
    this.user = this.sharedService.user;
    this.userID = this.user._id;

    this.leagueService.findLeaguesForUser(this.userID)
      .subscribe(
        (leagues: any) => {
          this.leagues = leagues;
        }, (error) => {
          console.log(error + ' user leagues cannot be loaded');
        });

    this.teamService.findTeamsForUser(this.userID)
      .subscribe(
        (teams: any) => {
          // console.log('in api call' + teams);
          this.teams = teams;
        }, (error) => {
          console.log(error + ' user teams cannot be loaded');
        });

    this.playerService.findPlayersForUser(this.userID)
      .subscribe(
        (players: any) => {
          // console.log('in api call' + players);
          this.players = players;
        }, (error) => {
          console.log(error + ' user players cannot be loaded');
        });
  }

  navigateToLeague(leagueId: string) {
    this.router.navigate(['/league', leagueId]);
  }

  navigateToTeam(teamId: string) {
    this.router.navigate(['/team', teamId]);
  }

  navigateToPlayer(playerId: string) {
    this.router.navigate(['/player', playerId]);
  }

  // navigate to search and add favorites components
  navigateToAddFavorites() {
    this.router.navigate(['/user', this.userID, 'favorites', 'searchFavorites']);
  }
}
