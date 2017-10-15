import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../user.model.client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
  }

  login() {
    const user: User = this.userService.findUserByUsername(this.username);
    if (user && user.password === this.password) {
      this.router.navigate(['/user', user.userID]);
    } else {
      this.errorFlag = true;
    }
  }
}
