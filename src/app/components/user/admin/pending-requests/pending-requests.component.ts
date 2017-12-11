import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../services/user.service.client';
import {SharedService} from '../../../../services/shared.service';
import { CriticService } from '../../../../services/critic.service.client';

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {

  requests: any;
  user: any;
  userID: string;

  constructor(private userService: UserService,
              private sharedService: SharedService,
              private criticService: CriticService) { }

  ngOnInit() {
    // get user profile from SharedService
    this.user = this.sharedService.user;
    this.userID = this.user._id;

    this.criticService.findAllPendingRequests()
      .subscribe(
        (requests: any) => {
          this.requests = requests;
        }, (error) => {
          console.log(error + ' error in finding all pending requests!!');
        });
  }

  acceptCriticRequest(userId: string) {
    this.criticService.promoteToCritic(userId)
      .subscribe(
        (user: any) => {
          console.log(user + ' this user has been promoted!');
          this.ngOnInit();
        }, (error) => {
          console.log(error + ' error in promoting this user!');
        });
  }

  rejectCriticRequest(requestId: string) {
    this.criticService.deleteRequest(requestId)
      .subscribe(
        (request: any) => {
          console.log(request + ' this request has been deleted!');
          this.ngOnInit();
        }, (error) => {
          console.log(error + ' error in delete this request!');
        });
  }
}
