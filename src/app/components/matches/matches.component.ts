import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  @Input() date: string;

  selectedDate: Date;
  formattedDate: string;

  constructor() { }

  ngOnInit() {
    this.selectedDate = new Date(this.date);
    this.formatDate();
  }

  incrementDate() {
    this.selectedDate.setDate(this.selectedDate.getDate() + 1);
    this.formatDate();
  }

  decrementDate() {
    this.selectedDate.setDate(this.selectedDate.getDate() - 1);
    this.formatDate();
  }

  formatDate() {
    const dd = this.selectedDate.getDate();
    const mm = this.selectedDate.getMonth() + 1;
    const yyyy = this.selectedDate.getFullYear();
    this.formattedDate = (mm + '/' + dd + '/' + yyyy);
  }
}
