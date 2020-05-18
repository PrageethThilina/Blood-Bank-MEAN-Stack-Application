import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DonorService } from "../shared/donor.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DonorGuard implements CanActivate {
  constructor(private donorService : DonorService,private router : Router){}

canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.donorService.isLoggedIn()) {
        this.router.navigateByUrl('/donor-login');
        this.donorService.deleteToken();
        return false;
      }
    return true;
  }
  
}
