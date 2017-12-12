import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../user.model.client';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  verifyPassword: string;
  errorFlag: boolean;
  errorMsg: string;
  userId: string;

  constructor(private userService: UserService,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.errorFlag = false;
    this.username = '';
    this.password = '';
    this.verifyPassword = '';
  }

  register() {
    this.userService.findUserByUsername(this.username)
      .subscribe(
        (user: User) => {
        this.errorFlag = true;
        this.errorMsg = user.username + ' : Username already exists! Choose a different one!';
      }, (error: any) => {
        if (this.password === this.verifyPassword) {
          this.userService.register(this.username, this.password)
            .subscribe(
              (newUser: any) => {
                this.userId = newUser._id;
                this.sharedService.user = newUser;
                this.navigateToUserProfile();
              }, (error2: any) => {
                // console.log(error2 + ' unable to register');
              }
            );
        } else {
          this.errorFlag = true;
          this.errorMsg = 'Password doesn\'t match!!';
        }
      });
  }

  navigateToUserProfile() {
    this.router.navigate(['/user', this.userId]);
  }
}
