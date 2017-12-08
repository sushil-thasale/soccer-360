import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-unregistered-home-header',
  templateUrl: './unregistered-home-header.component.html',
  styleUrls: ['./unregistered-home-header.component.css']
})
export class UnregisteredHomeHeaderComponent implements OnInit {

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
}
