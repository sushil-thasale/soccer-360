import {Component, OnChanges, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { LeagueService } from '../../../services/league.service.client';
import { TeamService } from '../../../services/team.service.client';
import { PlayerService } from '../../../services/player.service.client';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-friend-profile',
  templateUrl: './friend-profile.component.html',
  styleUrls: ['./friend-profile.component.css']
})
export class FriendProfileComponent implements OnInit, OnChanges {

  leagues: any;
  teams: any;
  players: any;
  friendId: string;
  friend: any;
  user: any;
  isFriend: boolean;
  errorFlag: boolean;
  errorMsg = 'All values are required to update the form!';

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private leagueService: LeagueService,
              private teamService: TeamService,
              private playerService: PlayerService,
              private sharedService: SharedService) { }

  ngOnChanges() {
    this.ngOnInit();
  }

  ngOnInit() {
    this.leagues = [];
    this.teams = [];
    this.players = [];

    // get friend's userId
    this.route.params.subscribe(params => {
      this.friendId = params['friendID'];

      this.userService.findUserById(this.friendId)
        .subscribe(
          (friend: any) => {
            this.friend = friend;
            this.errorFlag = false;
          }, (error) => {
            this.errorFlag = true;
            this.errorMsg = 'User not found!!';
          });

      this.leagueService.findLeaguesForUser(this.friendId)
        .subscribe(
          (leagues: any) => {
            this.leagues = leagues;
          }, (error) => {
            console.log(error + ' friends leagues cannot be loaded');
          });

      this.teamService.findTeamsForUser(this.friendId)
        .subscribe(
          (teams: any) => {
            this.teams = teams;
          }, (error) => {
            console.log(error + ' friends teams cannot be loaded');
          });

      this.playerService.findPlayersForUser(this.friendId)
        .subscribe(
          (players: any) => {
            this.players = players;
          }, (error) => {
            console.log(error + ' friends players cannot be loaded');
          });
    });

    // get user details from shared service
    // and check if the searched user is a friend or not
    this.user = this.sharedService.user;
    if (this.user.following.indexOf(this.friendId) > -1) {
      this.isFriend = true;
    } else {
      this.isFriend = false;
    }
  }

  followUser() {
    this.userService.followUser(this.user._id, this.friendId)
      .subscribe(
        (friend: any) => {
          this.errorFlag = false;
          this.isFriend = true;
        }, (error) => {
          this.errorFlag = true;
          this.errorMsg = 'Error in following the user!!';
        });
  }

  unfollowUser() {
    this.userService.unfollowUser(this.user._id, this.friendId)
      .subscribe(
        (friend: any) => {
          this.errorFlag = false;
          this.isFriend = false;
        }, (error) => {
          this.errorFlag = true;
          this.errorMsg = 'Error in unfollowing the user!!';
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
}
