import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { }

  login(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.errorFlag = false;
    const user: User = this.userService.findUserByUsername(username);
    if (user) {
      this.router.navigate(['/user', user.userID]);
    }
    this.router.navigate(['/user', user.userID]);
  }
}
