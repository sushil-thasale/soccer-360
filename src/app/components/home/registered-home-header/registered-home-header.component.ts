import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { UserService } from '../../../services/user.service.client';

@Component({
  selector: 'app-home-header',
  templateUrl: './registered-home-header.component.html',
  styleUrls: ['./registered-home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  user: any;
  userID: string;

  constructor(private router: Router,
              private sharedService: SharedService,
              private userService: UserService) { }

  ngOnInit() {
    // get user profile from SharedService
    this.user = this.sharedService.user;
    this.userID = this.user._id;
  }

  navigateToCalender() {
    this.router.navigate(['/calender']);
  }

  navigateToSearch() {
    this.router.navigate(['/search']);
  }

  navigateToHome() {
    this.router.navigate(['/user', this.userID, 'home']);
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/'] )
      );
  }
}
