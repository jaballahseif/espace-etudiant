import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.role) {
      if (route.data['roles'] && route.data['roles'].indexOf(currentUser.role) === -1) {
        console.log('User does not have required role');
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
    console.log('User not logged in');
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
