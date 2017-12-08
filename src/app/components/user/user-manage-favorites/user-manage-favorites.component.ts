import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { LeagueService } from '../../../services/league.service.client';
import { TeamService } from '../../../services/team.service.client';
import { PlayerService } from '../../../services/player.service.client';

@Component({
  selector: 'app-user-manage-favorites',
  templateUrl: './user-manage-favorites.component.html',
  styleUrls: ['./user-manage-favorites.component.css']
})
export class UserManageFavoritesComponent implements OnInit {

  userID: string;
  leagues: any;
  teams: any;
  players: any;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private leagueService: LeagueService,
              private teamService: TeamService,
              private playerService: PlayerService) { }

  ngOnInit() {
    this.leagues = [];
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
    });

    console.log('in client' + this.userID);

    this.leagueService.findLeaguesForUser(this.userID)
      .subscribe(
        (leagues: any) => {
          console.log('in api call' + leagues);
          this.leagues = leagues;
        }, (error) => {
          console.log(error);
          console.log('user leagues cannot be loaded');
        });

    this.teamService.findTeamsForUser(this.userID)
      .subscribe(
        (teams: any) => {
          console.log('in api call' + teams);
          this.teams = teams;
        }, (error) => {
          console.log(error);
          console.log('user teams cannot be loaded');
        });

    this.playerService.findPlayersForUser(this.userID)
      .subscribe(
        (players: any) => {
          console.log('in api call' + players);
          this.players = players;
        }, (error) => {
          console.log(error);
          console.log('user players cannot be loaded');
        });
  }

  navigateToProfile() {
    this.router.navigate(['/user', this.userID]);
  }

  // navigate to home
  updateFavorites() {
    this.router.navigate(['/']);
  }

  // navigate to search and add favorites components
  addFavorites() {
    this.router.navigate(['/user', this.userID, 'favorites', 'searchFavorites']);
  }

  unfollowLeague(leagueID: string) {
    this.leagueService.unfollowLeague(this.userID, leagueID)
      .subscribe(
        (league: any) => {
          console.log('in api call' + league);
          this.ngOnInit();
        }, (error) => {
          console.log(error);
          console.log('unable to unfollow a league');
        });
  }

  unfollowTeam(teamID: string) {
    this.teamService.unfollowTeam(this.userID, teamID)
      .subscribe(
        (team: any) => {
          console.log('in api call' + team);
          this.ngOnInit();
        }, (error) => {
          console.log(error);
          console.log('unable to unfollow a team');
        });
    }

  unfollowPlayer(playerID: string) {
    this.playerService.unfollowPlayer(this.userID, playerID)
      .subscribe(
        (player: any) => {
          console.log('in api call' + player);
          this.ngOnInit();
        }, (error) => {
          console.log(error);
          console.log('unable to unfollow a player');
        });
  }

}
