import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class LoggedInUserGuard implements CanActivate {

  constructor ( private userService: UserService, private router: Router ) {};

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): 
    Observable<boolean
    | UrlTree> 
    | Promise<boolean | UrlTree> 
    | boolean 
    | UrlTree {
    if (this.userService.isLoggedIn()) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      window.alert("You don't have permission to view this page");
      return this.router.parseUrl('/');
    }
  }   
}
