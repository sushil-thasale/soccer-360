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
  user: User;
  userID: string;
  errorFlag: boolean;
  errorMsg = 'All values are required to update the form!';

  constructor(private userService: UserService, private router: Router, private  route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
    });
    this.user = this.userService.findUserById(this.userID);
  }

  updateProfile() {
    if (this.user) {
      this.user.username = this.loginForm.value.username;
      this.user.firstname = this.loginForm.value.password;
      this.user.lastname = this.loginForm.value.lastname;
      this.user.email = this.loginForm.value.email;
      if (!this.errorFlag) {
        this.userService.updateUser(this.userID, this.user);
        this.router.navigate(['/user', this.user.userID]);
      }
    } else {
      this.errorFlag = true;
    }
  }

  navigateToWebsites() {
    this.router.navigate(['/user', this.userID, 'website']);
  }
}
