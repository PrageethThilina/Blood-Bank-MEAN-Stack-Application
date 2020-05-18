import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../shared/hospital.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-hospital-header',
  templateUrl: './hospital-header.component.html',
  styleUrls: ['./hospital-header.component.scss']
})
export class HospitalHeaderComponent implements OnInit {

  constructor(private hospitalService: HospitalService, private router: Router) { }

  ngOnInit(): void {
  }
 
  onLogout(){
    this.hospitalService.deleteToken();
    this.router.navigate(['/hospital-login']);
  }

}
