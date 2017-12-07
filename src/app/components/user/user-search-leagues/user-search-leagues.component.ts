import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { LeagueService } from '../../../services/league.service.client';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-user-search-leagues',
  templateUrl: './user-search-leagues.component.html',
  styleUrls: ['./user-search-leagues.component.css']
})
export class UserSearchLeaguesComponent implements OnInit {

  userID: string;
  searchTerm: string;
  items: any;

  constructor(private userService: UserService,
              private router: Router,
              private  route: ActivatedRoute,
              private  leagueService: LeagueService) { }

  ngOnInit() {
    this.searchTerm = '';
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
    });
  }

  searchItems() {
    if (this.searchTerm === '' || this.searchTerm.length <= 2) {
      console.log('please enter valid name');
      return;
    }
    this.leagueService.searchLeaguesByName(this.userID, this.searchTerm)
      .subscribe(
        (items: any) => {
          this.items = items;
          console.log(items);
        }, (error) => {
          console.log(error);
        });
  }

  navigateToProfile() {
    this.router.navigate(['/user', this.userID]);
  }

  // navigate to home
  updateFavorites() {
    // update leagues/team/player and navigate to favorites
    this.router.navigate(['/user', this.userID, 'favorites']);
  }
}
