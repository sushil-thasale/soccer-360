import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { LeagueService } from '../../../services/league.service.client';
import { TeamService } from '../../../services/team.service.client';
import { PlayerService } from '../../../services/player.service.client';
import { SharedService } from '../../../services/shared.service';
import { CriticService } from '../../../services/critic.service.client';

@Component({
  selector: 'app-follows-sidebar',
  templateUrl: './follows-sidebar.component.html',
  styleUrls: ['./follows-sidebar.component.css']
})
export class FollowsSidebarComponent implements OnInit {

  following: any;
  followers: any;
  user: any;
  userID: string;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private leagueService: LeagueService,
              private teamService: TeamService,
              private playerService: PlayerService,
              private sharedService: SharedService,
              private criticService: CriticService) { }

  ngOnInit() {
    this.following = [];
    this.followers = [];

    // get user profile from SharedService
    this.user = this.sharedService.user;
    this.userID = this.user._id;

    this.userService.findFollowing(this.userID)
      .subscribe(
        (following: any) => {
          this.following = following;
        }, (error) => {
          console.log(error + ' user following cannot be loaded');
        });

    this.userService.findFollowers(this.userID)
      .subscribe(
        (followers: any) => {
          this.followers = followers;
        }, (error) => {
          console.log(error + ' user followers cannot be loaded');
        });
  }

  navigateToFriendsProfile(friendId: string) {
    this.router.navigate(['/profile', friendId]);
  }

  // navigate to search and add favorites components
  navigateToSearchAndAddFriends() {
    this.router.navigate(['/users/search']);
  }

  applyForCritic() {
    const criticRequest = {'isApproved': false, 'applicant': this.userID};
    this.criticService.createCriticRequest(criticRequest)
      .subscribe(
        (cRequest: any) => {
          console.log('Applied for critic!' + cRequest);
        }, (error) => {
          console.log(error + ' error in sending request for critic!');
        });
  }
}
