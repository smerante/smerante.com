import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let authorized: boolean = this.auth.isVerified();
    if(!authorized){
      this.router.navigate(['/home']);
    }
    return authorized;
  }
}