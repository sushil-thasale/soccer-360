import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-unregistered-home-footer',
  templateUrl: './unregistered-home-footer.component.html',
  styleUrls: ['./unregistered-home-footer.component.css']
})
export class UnregisteredHomeFooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToProfile() {
    this.router.navigate(['/login']);
  }
}
