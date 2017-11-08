import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../user.model.client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  username: string;
  password: string;
  verifyPassword: string;
  errorFlag: boolean;
  errorMsg = 'Username already exists! Choose a different one!';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.verifyPassword = this.loginForm.value.verifyPassword;
  }

  register() {
    this.userService.findUserByUsername(this.username)
      .subscribe((user: User) => {
        console.log('findUserByUsername register ' + user);
        console.log('findUserByUsername register ' + user.username);
        if (user.username) {
          this.errorFlag = true;
          return;
        } else {
          if (this.password === this.verifyPassword) {
            this.userService.createUser(this.username, this.password)
              .subscribe((newUser: User) => {
                console.log('findUserByUsername register ' + newUser);
                if (newUser) {
                  this.router.navigate(['/user', newUser._id]);
                }
              });
          } else {
            this.errorFlag = true;
            this.errorMsg = 'Password doesn\'t match!!';
          }
        }
      });

    // if (this.password === this.verifyPassword) {
    //   this.userService.createUser(this.username, this.password)
    //     .subscribe((newUser: User) => {
    //       if (newUser) {
    //         this.router.navigate(['/user', newUser._id]);
    //       }
    //     });
    // } else {
    //   this.errorFlag = true;
    //   this.errorMsg = 'Password doesn\'t match!!';
    // }
  }
}
