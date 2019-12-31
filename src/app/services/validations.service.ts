import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService implements CanActivate{

  constructor() { }

  canActivate(
    route: import("@angular/router").ActivatedRouteSnapshot, 
    state: import("@angular/router").RouterStateSnapshot): boolean | 
    import("@angular/router").UrlTree | import("rxjs").Observable<boolean | 
    import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    let value = sessionStorage.getItem('login');
    if(value == 'true')
      return true;
    return false;
  }
}
