import {Component, OnChanges, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { LeagueService } from '../../../services/league.service.client';
import {PlayerService } from '../../../services/player.service.client';
import { TeamService } from '../../../services/team.service.client';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-user-search-leagues',
  templateUrl: './user-search-favorites.component.html',
  styleUrls: ['./user-search-favorites.component.css']
})
export class UserSearchFavoritesComponent implements OnInit {

  userID: string;
  searchTerm: string;
  items: any;
  selectedValue: string;
  options: any;
  itemsCounter: number;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private leagueService: LeagueService,
              private teamService: TeamService,
              private playerService: PlayerService) { }

  ngOnInit() {
    this.options = [];
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

    switch (this.selectedValue) {
      case 'LEAGUES': { this.searchLeagues(); break; }
      case 'TEAMS': { this.searchTeams(); break; }
      case 'PLAYERS': { this.searchPlayers(); break; }
    }

    this.items = [];
    this.itemsCounter = 0;
    this.options = [];
  }

  constructOptions() {
    if (this.items && this.items.length > 0) {
      for (let i = 0; i < this.items.length; i++) {
        const option =  {name: this.items[i].name, value: this.items[i].apiId, checked: false};
        this.options.push(option);
      }
    }
  }

  selectedOptions() {
    return this.options
      .filter(opt => opt.checked)
      .map(opt => opt.value);
  }

  searchLeagues() {
    this.leagueService.searchLeaguesByName(this.userID, this.searchTerm)
      .subscribe(
        (items: any) => {
          this.items = items;
          console.log(items);
          this.constructOptions();
        }, (error) => {
          console.log(error);
        });
  }

  searchPlayers() {
    this.playerService.searchPlayersByName(this.userID, this.searchTerm)
      .subscribe(
        (items: any) => {
          this.items = items;
          console.log(items);
          this.constructOptions();
        }, (error) => {
          console.log(error);
        });
  }

  searchTeams() {
    this.teamService.searchTeamsByName(this.userID, this.searchTerm)
      .subscribe(
        (items: any) => {
          this.items = items;
          console.log(items);
          this.constructOptions();
        }, (error) => {
          console.log(error);
        });
  }

  navigateToProfile() {
    this.router.navigate(['/user', this.userID]);
  }

  // update followed leagues/team/player and navigate to favorites
  updateFavorites() {
    console.log('in updateFavorites()');
    console.log(this.selectedOptions());
    const selectedItems = this.selectedOptions();
    this.itemsCounter = selectedItems.length;

    if (this.itemsCounter > 0) {
      switch (this.selectedValue) {
      case 'LEAGUES': { this.followLeagues(selectedItems); break; }
      case 'TEAMS': { this.followTeams(selectedItems); break; }
      case 'PLAYERS': { this.followPlayers(selectedItems); break; }
      }
    } else {
      this.options = [];
      this.navigateToManageFovorites();
    }
  }

  followLeagues(leagues: string[]) {
    leagues.map(leagueId => this.followLeague(leagueId));
  }

  followTeams(teams: string[]) {
    teams.map(teamId => this.followTeam(teamId));
  }

  followPlayers(players: string[]) {
    players.map(playerId => this.followPlayer(playerId));
  }

  followLeague(leagueId: string) {
    this.leagueService.followLeague(this.userID, leagueId)
      .subscribe(
        (res: any) => {
          console.log('in res' + res);
          this.decrementCounter();
        }, (error) => {
          console.log('in error');
          console.log(error);
        });
  }

  decrementCounter() {
    this.itemsCounter--;
    if (this.itemsCounter === 0) {
      this.navigateToManageFovorites();
    }
  }

  followTeam(teamId: string) {
    this.teamService.followTeam(this.userID, teamId)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.decrementCounter();
        }, (error) => {
          console.log(error);
        });
  }

  followPlayer(playerId: string) {
    this.playerService.followPlayer(this.userID, playerId)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.decrementCounter();
        }, (error) => {
          console.log(error);
        });
  }

  navigateToManageFovorites() {
    this.router.navigate(['/user', this.userID, 'favorites']);
  }
}
