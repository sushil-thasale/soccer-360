import { Component, OnInit } from '@angular/core';
import { SharedService} from '../../../services/shared.service';
import { UserService } from '../../../services/user.service.client';

@Component({
  selector: 'app-search-match-objects',
  templateUrl: './search-match-objects.component.html',
  styleUrls: ['./search-match-objects.component.css']
})
export class SearchMatchObjectsComponent implements OnInit {

  isLoggedIn: boolean;
  user: any;

  constructor(private userService: UserService,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.userService.loggedIn()
      .subscribe(
        (isLoggedIn: boolean) => {
          this.isLoggedIn = isLoggedIn;
          console.log(isLoggedIn);
          if (this.isLoggedIn) {
            this.user = this.sharedService.user;
          } else {
            this.user = true;
          }
          console.log(this.user);
        }, (error) => {
          console.log(error + ' cannot check if user is logged in');
        }
      );
  }
}
