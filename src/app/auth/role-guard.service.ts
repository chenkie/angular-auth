import { Injectable } from '@angular/core';
import { Router, Route, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class RoleGuardService implements CanLoad {
  constructor(public authService: AuthService, public router: Router) {}

  canLoad(route: Route): boolean {
    const expectedRole = route.data.expectedRole;

    if (
      !this.authService.isAuthenticated() ||
      !this.authService.hasRole(expectedRole)
    ) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
