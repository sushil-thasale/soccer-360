import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-unregistered-home-user-profile',
  templateUrl: './unregistered-home-user-profile.component.html',
  styleUrls: ['./unregistered-home-user-profile.component.css']
})
export class UnregisteredHomeUserProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }


}
