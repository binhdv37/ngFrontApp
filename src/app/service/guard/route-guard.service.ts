import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private router: Router) { }

  // tslint:disable-next-line:typedef
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    // check if user login or not, return boolean
    if (this.isLoggedIn()) { return true; }

    // redirect to login if token == null
    this.router.navigate(['login']);
    return false;
  }

  // tslint:disable-next-line:typedef
  isLoggedIn(){
    const token = sessionStorage.getItem('Authentication');
    return (token !== null);
  }

}
