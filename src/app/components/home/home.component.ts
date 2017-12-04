import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currDate: Date;
  userID: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currDate = new Date();
  }

  navigateToCalender() {
    this.router.navigate(['/calender']);
  }

  navigateToSearch() {
    this.router.navigate(['/search']);
  }

  navigateToProfile() {
    this.router.navigate(['/user', this.userID]);
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  logout() {
  }
}
