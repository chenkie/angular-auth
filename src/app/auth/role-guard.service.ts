import { Injectable } from '@angular/core';
import { Router, Route, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class RoleGuardService implements CanLoad {
  constructor(public authService: AuthService, public router: Router) {}

  canLoad(route: Route): boolean {
    // get expected role

    // if the user isn't authenticated or doesn't
    // have the expected role, redirect to home
    return false;
  }
}
