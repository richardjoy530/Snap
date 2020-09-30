import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';

@Injectable({
  providedIn: 'root'
})
export class AppDataGuard implements CanActivate {
  constructor(private data: DataService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.data.selectedAppInfo == null) {
      this.router.navigate(['login'])
      return false
    }
    else {
      return true
    }
  }

}
