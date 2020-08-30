import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Hospital } from '../../shared/hospital.model';
import { HospitalService } from '../../shared/hospital.service';

import { HospitalBloodRequestService } from '../../shared/hospital-blood-request.service'
import { HospitalBloodRequest } from 'src/app/shared/hospital-blood-request.model';

@Component({
  selector: 'app-hospital-view-previous-blood-requests',
  templateUrl: './hospital-view-previous-blood-requests.component.html',
  styleUrls: ['./hospital-view-previous-blood-requests.component.scss']
})
export class HospitalViewPreviousBloodRequestsComponent implements OnInit {

  show_container: boolean;
  hospitalDetails;

  constructor(public hospitalService: HospitalService, public hospitalbloodrequestService: HospitalBloodRequestService, private router: Router) { }

  ngOnInit() {


    this.hospitalService.getUserProfile().subscribe(
      res => {
        this.hospitalDetails = res['hospital'];
      },
      err => {
        console.log(err);

      }
    );

  }

  getHospitalPreviousOrders(hospital_name: string) {
    this.hospitalbloodrequestService.getHospitalPreviousOrders(hospital_name).subscribe((res) => {
      console.log(hospital_name);
      this.hospitalbloodrequestService.hospitalbloodrequests = res as HospitalBloodRequest[];
    });
  }

}
