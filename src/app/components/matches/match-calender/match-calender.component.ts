import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-calender',
  templateUrl: './match-calender.component.html',
  styleUrls: ['./match-calender.component.css']
})
export class MatchCalenderComponent implements OnInit {

  selectedDate: string;

  constructor() { }

  ngOnInit() {
  }

}
