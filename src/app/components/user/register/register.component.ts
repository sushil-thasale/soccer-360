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
  errorMsg = 'username already exists! Choose a different one!';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { }

  register() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.verifyPassword = this.loginForm.value.verifyPassword;
    const user: User = this.userService.findUserByUsername(this.username);
    if (!user && this.password === this.verifyPassword) {
      const newUser: User = this.userService.createUser(this.username, this.password);
      this.router.navigate(['/user', newUser.userID]);
    } else {
      this.errorFlag = true;
    }
  }
}
