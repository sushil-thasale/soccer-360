import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from './user.service.client';

@Injectable()
export class AuthGuard implements CanActivate {

  isLoggedIn: boolean;

  constructor(private userService: UserService,
              private router: Router) {}

  canActivate() {
    this.userService.loggedIn()
      .subscribe(
        (isLoggedIn) => {
          this.isLoggedIn = isLoggedIn;
          if (this.isLoggedIn) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
    return this.userService.loggedIn();
  }
}
