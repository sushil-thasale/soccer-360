import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { UserService } from '../../services/user.service.client';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  @Input() date: string;

  selectedDate: Date;
  formattedDate: string;
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
          }
          console.log(this.user);
        }, (error) => {
          console.log(error + ' cannot check if user is logged in');
        }
      );

    this.selectedDate = new Date(this.date);
    this.formatDate();
  }

  incrementDate() {
    this.selectedDate.setDate(this.selectedDate.getDate() + 1);
    this.formatDate();
  }

  decrementDate() {
    this.selectedDate.setDate(this.selectedDate.getDate() - 1);
    this.formatDate();
  }

  formatDate() {
    const dd = this.selectedDate.getDate();
    const mm = this.selectedDate.getMonth() + 1;
    const yyyy = this.selectedDate.getFullYear();
    this.formattedDate = (mm + '/' + dd + '/' + yyyy);
  }
}
