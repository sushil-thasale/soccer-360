import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../user.model.client';
import { NgForm } from '@angular/forms';
import 'rxjs/Rx';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  user: any;
  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg: string;
  userID: string;

  constructor(private userService: UserService, private router: Router, private  sharedService: SharedService) { }

  ngOnInit() {
    this.errorFlag = false;
  }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    this.userService.login(this.username, this.password)
      .subscribe(
        (user: any) => {
          this.sharedService.user = user;
          this.user = user;
          this.userID = user._id;
          if (this.user.roles === 'admin') {
            this.navigateToAdminHome();
          } else {
            this.navigateToHome();
          }
        }, (error: any) => {
          // console.log(error);
          this.errorFlag = true;
          this.errorMsg = 'Invalid username or password !';
        });
    }

  navigateToHome() {
    this.router.navigate(['/user', this.userID, 'home']);
  }

  navigateToAdminHome() {
    this.router.navigate(['/admin', this.userID, 'home']);
  }
}
