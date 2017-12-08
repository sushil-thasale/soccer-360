import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home-footer',
  templateUrl: './registered-home-footer.component.html',
  styleUrls: ['./registered-home-footer.component.css']
})
export class HomeFooterComponent implements OnInit {

  userID: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToProfile() {
    this.router.navigate(['/user', this.userID]);
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
