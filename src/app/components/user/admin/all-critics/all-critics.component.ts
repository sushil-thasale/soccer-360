import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../services/user.service.client';
import {SharedService} from '../../../../services/shared.service';
import { CriticService } from '../../../../services/critic.service.client';

@Component({
  selector: 'app-all-critics',
  templateUrl: './all-critics.component.html',
  styleUrls: ['./all-critics.component.css']
})
export class AllCriticsComponent implements OnInit {

  users: any;
  user: any;
  userID: string;

  constructor(private userService: UserService,
              private sharedService: SharedService,
              private criticService: CriticService) { }

  ngOnInit() {
    // get user profile from SharedService
    this.user = this.sharedService.user;
    this.userID = this.user._id;

    this.userService.getAllCritics()
      .subscribe(
        (users: any) => {
          this.users = users;
        }, (error) => {
          console.log(error + ' error in finding all critics!');
        });
  }

  removeUser(criticId: string) {
    this.userService.deleteUser(criticId)
      .subscribe(
        (user: any) => {
          // console.log(user + ' this critic has been deleted!');
          this.ngOnInit();
        }, (error) => {
          console.log(error + ' error in deleting this critic!');
        });
  }

  demoteToUser(criticId: string) {
    this.userService.demoteToUser(criticId)
      .subscribe(
        (user: any) => {
          // console.log(user + ' this critic has been demoted!');
          this.ngOnInit();
        }, (error) => {
          console.log(error + ' error in demoting this critic!');
        });
  }
}
