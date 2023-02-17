import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Utils from '../utils';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true
    let score: number = Number(localStorage.getItem('user_score'))
    localStorage.removeItem('user_score')
    if (score < 30) {
      Utils.showCantAccess()
      this.router.navigate([''])
      return false
    }
    return true
  }

}
