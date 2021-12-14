import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
@Injectable()
export class AuthGuardService implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return true;
    }
  }