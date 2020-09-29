import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GlobalEventsManager } from "../_common/gobal-events-manager";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private globalEventsManager: GlobalEventsManager) { }

  canActivate() {

    if (localStorage.getItem('currentUser')) {

      this.globalEventsManager.showNavBar.emit(true);
      return true;
    }
    else {
      // not logged in so redirect to login page
      this.router.navigate(['/login']);
      this.globalEventsManager.hideNavBar.emit(true);
      return;
    }


  }
}
