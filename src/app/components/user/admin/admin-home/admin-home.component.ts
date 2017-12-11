import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { SharedService} from '../../../../services/shared.service';
import { UserService} from '../../../../services/user.service.client';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  user: any;
  userID: string;
  selectionType: string;

  constructor(private router: Router,
              private sharedService: SharedService,
              private userService: UserService) { }

  ngOnInit() {
    this.selectionType = '';

    // get user profile from SharedService
    this.user = this.sharedService.user;
    this.userID = this.user._id;
  }

  navigateToProfile() {
    this.router.navigate(['/user', this.userID]);
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/'] )
      );
  }

  changeSelectionType(type: string) {
    this.selectionType = type;
  }
}
