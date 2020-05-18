import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../shared/hospital.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-hospital-facilities',
  templateUrl: './hospital-facilities.component.html',
  styleUrls: ['./hospital-facilities.component.scss']
})
export class HospitalFacilitiesComponent implements OnInit {
  
  hospitalDetails;

  constructor(private hospitalService: HospitalService, private router: Router) { }

  ngOnInit(): void {
    this.hospitalService.getUserProfile().subscribe(
      res => {
        this.hospitalDetails = res['hospital'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
    this.hospitalService.deleteToken();
    this.router.navigate(['/hospital-login']);
  }

}
