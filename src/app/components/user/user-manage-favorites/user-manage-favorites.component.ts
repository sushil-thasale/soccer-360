import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { LeagueService } from '../../../services/league.service.client';

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
              private  route: ActivatedRoute,
              private  leagueService: LeagueService) { }

  ngOnInit() {
    this.leagues = [];
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
    });

    console.log('in client' + this.userID);

    this.leagueService.findLeaguesForUser(this.userID)
      .subscribe(
        (league: any) => {
          console.log('in api call' + league);
          this.leagues = league;
        }, (error) => {
          console.log(error);
          console.log('user leagues cannot be loaded');
        });
  }

  navigateToProfile() {
    this.router.navigate(['/user', this.userID]);
  }

  // navigate to home
  updateFavorites() {
    this.router.navigate(['/']);
  }

  // navigate to league search component
  addLeagues() {
    this.router.navigate(['/']);
  }

  // navigate to team search component
  addTeams() {
    this.router.navigate(['/']);
  }

  // navigate to player search component
  addPlayers() {
    this.router.navigate(['/']);
  }

  unfollowLeague(leagueID: string) {
    this.leagueService.unfollowLeague(this.userID, leagueID)
      .subscribe(
        (league: any) => {
          console.log('in api call' + league);
        }, (error) => {
          console.log(error);
          console.log('unable to unfollow a league');
        });
  }

  unfollowTeam(teamID: string) {
    }

  unfollowPlayer(playerID: string) {
    }

}
