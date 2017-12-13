import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home-new',
  templateUrl: './user-home-new.component.html',
  styleUrls: ['./user-home-new.component.css']
})
export class UserHomeNewComponent implements OnInit {

  currDate: Date;
  user: any;

  constructor() { }

  ngOnInit() {
    this.currDate = new Date();
  }
}
