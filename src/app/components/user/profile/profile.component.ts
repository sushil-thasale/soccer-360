import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../user.model.client';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  userID: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  errorFlag: boolean;
  errorMsg = 'All values are required!';

  constructor(private userService: UserService, private router: Router, private  route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
    });
    this.username = this.loginForm.value.username;
    this.firstname = this.loginForm.value.password;
    this.lastname = this.loginForm.value.lastname;
    this.email = this.loginForm.value.email;
  }

  updateProfile() {
    const user: User = this.userService.findUserById(this.userID);
    if (user) {
      user.username = this.username;
      user.firstname = this.firstname;
      user.lastname = this.lastname;
      user.email = this.email;
      if (!this.errorFlag) {
        this.userService.updateUser(this.userID, user);
        this.router.navigate(['/user', user.userID]);
      }
    } else {
      this.errorFlag = true;
    }
  }

  navigateToWebsites() {
    this.router.navigate(['/user', this.userID, 'website']);
  }
}
