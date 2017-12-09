import {Component, OnChanges, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LeagueService } from '../../../../services/league.service.client';
import { UserService } from '../../../../services/user.service.client';
import { PlayerService } from '../../../../services/player.service.client';
import { TeamService } from '../../../../services/team.service.client';
import { SharedService } from '../../../../services/shared.service';

@Component({
  selector: 'app-search-objects',
  templateUrl: './search-objects.component.html',
  styleUrls: ['./search-objects.component.css']
})
export class SearchObjectsComponent implements OnInit {

  user: any;
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

    switch (this.selectedValue) {
      case 'LEAGUES': { this.searchLeagues(); break; }
      case 'TEAMS': { this.searchTeams(); break; }
      case 'PLAYERS': { this.searchPlayers(); break; }
    }

    this.items = [];
    this.itemsCounter = 0;
    this.options = [];
  }

  searchLeagues() {
    this.leagueService.searchLeaguesByName(this.userID, this.searchTerm)
      .subscribe(
        (items: any) => {
          this.items = items;
          console.log(items);
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
        }, (error) => {
          console.log(error);
        });
  }

  navigateToSearchedItem(id: string) {
    switch (this.selectedValue) {
      case 'LEAGUES': { this.navigateToSearchedLeague(id); break; }
      case 'TEAMS': { this.navigateToSearchedTeam(id); break; }
      case 'PLAYERS': { this.navigateToSearchedPlayer(id); break; }
    }
  }

  navigateToSearchedLeague(leagueId: string) {
    this.router.navigate(['/league', leagueId]);
  }

  navigateToSearchedTeam(teamId: string) {
    this.router.navigate(['/team', teamId]);
  }

  navigateToSearchedPlayer(playerId: string) {
    this.router.navigate(['/player', playerId]);
  }
}
