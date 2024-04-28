import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
class PermissionsService {
  constructor(private router: Router) {}
  // ===========
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem('user') != null) return true;
    this.router.navigate(['login']);
    return false;
  }
}
// =====================
export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return inject(PermissionsService).canActivate(next, state);
};

