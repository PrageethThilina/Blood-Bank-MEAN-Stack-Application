import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HospitalService } from "../shared/hospital.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HospitalGuard implements CanActivate {

constructor(private hospitalService : HospitalService,private router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.hospitalService.isLoggedIn()) {
        this.router.navigateByUrl('/hospital-login');
        this.hospitalService.deleteToken();
        return false;
      }
    return true;
  }
  
}
