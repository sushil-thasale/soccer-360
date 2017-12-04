import {Component, OnChanges, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { SoccerServiceClient } from '../../../services/soccer.service.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit, OnChanges {

  @Input() date: string;

  matches: any;

  constructor(private soccerService: SoccerServiceClient, private router: Router) { }

  ngOnInit() {
    this.searchMatches();
  }

  ngOnChanges() {
    this.searchMatches();
  }

  searchMatches() {
    console.log(this.date);
    this.soccerService
      .getMatchesByDate(this.date)
      .subscribe(
        (data: any) => {
          this.matches = this.parseBody(data);
        }
      );
  }

  parseBody(data: any) {
    let val = data._body;
    val = JSON.parse(val);
    return val;
  }

  navigateToMatchDetails(matchId: string) {
    this.router.navigate(['/match', matchId]);
  }
}
