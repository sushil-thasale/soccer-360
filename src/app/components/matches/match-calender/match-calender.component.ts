import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service.client';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-match-calender',
  templateUrl: './match-calender.component.html',
  styleUrls: ['./match-calender.component.css']
})
export class MatchCalenderComponent implements OnInit {

  selectedDate: string;
  isLoggedIn: boolean;
  user: any;

  constructor(private userService: UserService,
              private sharedService: SharedService) { }

  ngOnInit() {

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
