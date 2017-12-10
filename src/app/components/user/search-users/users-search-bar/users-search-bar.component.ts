import {Component, OnChanges, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LeagueService } from '../../../../services/league.service.client';
import { UserService } from '../../../../services/user.service.client';
import { PlayerService } from '../../../../services/player.service.client';
import { TeamService } from '../../../../services/team.service.client';
import { SharedService } from '../../../../services/shared.service';

@Component({
  selector: 'app-users-search-bar',
  templateUrl: './users-search-bar.component.html',
  styleUrls: ['./users-search-bar.component.css']
})
export class UsersSearchBarComponent implements OnInit {

  user: any;
  userID: string;
  searchTerm: string;
  items: any;
  options: any;
  itemsCounter: number;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private leagueService: LeagueService,
              private teamService: TeamService,
              private playerService: PlayerService,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.options = [];
    this.searchTerm = '';
    this.user = this.sharedService.user;
    this.userID = this.user._id;
  }

  searchItems() {
    if (this.searchTerm === '' || this.searchTerm.length <= 2) {
      console.log('please enter valid name');
      return;
    }

    this.searchUsers();

    this.items = [];
    this.itemsCounter = 0;
    this.options = [];
  }

  searchUsers() {
    this.userService.getUsersByName(this.searchTerm)
      .subscribe(
        (items: any) => {
          this.items = items;
        }, (error) => {
          console.log(error);
        });
  }

  navigateToFriendProfile(friendId: string) {
    this.router.navigate(['/profile', friendId]);
  }
}
