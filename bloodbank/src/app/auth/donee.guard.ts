import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DoneeService } from "../shared/donee.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DoneeGuard implements CanActivate {
  constructor(private doneeService : DoneeService,private router : Router){}

canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.doneeService.isLoggedIn()) {
        this.router.navigateByUrl('/donee-login');
        this.doneeService.deleteToken();
        return false;
      }
    return true;
  }
  
}
