import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-home-footer',
  templateUrl: './registered-home-footer.component.html',
  styleUrls: ['./registered-home-footer.component.css']
})
export class HomeFooterComponent implements OnInit {

  user: any;
  userID: string;

  constructor(private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    // get user profile from SharedService
    this.user = this.sharedService.user;
    this.userID = this.user._id;
  }

  navigateToProfile() {
    this.router.navigate(['/user', this.userID]);
  }

  navigateToHome() {
    this.router.navigate(['/user', this.userID, 'home']);
  }
}
