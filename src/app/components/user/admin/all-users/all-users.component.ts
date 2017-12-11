import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../services/shared.service';
import { UserService } from '../../../../services/user.service.client';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: any;
  user: any;
  userID: string;

  constructor(private userService: UserService,
              private sharedService: SharedService) { }

  ngOnInit() {
    // get user profile from SharedService
    this.user = this.sharedService.user;
    this.userID = this.user._id;

    this.userService.getAllUsers()
      .subscribe(
        (users: any) => {
          this.users = users;
        }, (error) => {
          console.log(error + ' error in finding all users!');
        });
  }

  removeUser(userId: string) {
    this.userService.deleteUser(userId)
      .subscribe(
        (user: any) => {
          // console.log(user + ' this user has been deleted!');
          this.ngOnInit();
        }, (error) => {
          console.log(error + ' error in deleting this users!');
        });
  }
}
