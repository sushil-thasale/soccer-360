import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  userID: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToCalender() {
    this.router.navigate(['/calender']);
  }

  navigateToSearch() {
    this.router.navigate(['/search']);
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  logout() {
  }

}
