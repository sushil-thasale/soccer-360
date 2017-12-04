import {Component, OnChanges, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { SoccerServiceClient } from '../../../services/soccer.service.client';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit, OnChanges {

  @Input() date: string;

  matches: any;

  constructor(private soccerService: SoccerServiceClient) { }

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
          let val = data._body;
          val = JSON.parse(val);
          this.matches = val;
        }
      );
  }


}
