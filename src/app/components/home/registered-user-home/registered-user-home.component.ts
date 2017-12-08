import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-registered-user-home',
  templateUrl: './registered-user-home.component.html',
  styleUrls: ['./registered-user-home.component.css']
})
export class RegisteredUserHomeComponent implements OnInit {

  currDate: Date;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currDate = new Date();
  }
}

