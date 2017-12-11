import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service.client';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currDate: Date;
  isLoggedIn: boolean;
  user: any;

  constructor(private userService: UserService,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.currDate = new Date();
    this.userService.loggedIn()
      .subscribe(
        (isLoggedIn: boolean) => {
          this.isLoggedIn = isLoggedIn;
          // console.log(isLoggedIn);
          if (this.isLoggedIn) {
            this.user = this.sharedService.user;
          } else {
            this.user = true;
          }
          // console.log(this.user);
        }, (error) => {
          console.log(error + ' cannot check if user is logged in');
        }
      );
  }
}
