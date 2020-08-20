import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { HospitalBloodRequestService } from '../../shared/hospital-blood-request.service'
import { HospitalBloodRequest } from 'src/app/shared/hospital-blood-request.model';

@Component({
  selector: 'app-hospital-view-previous-blood-requests',
  templateUrl: './hospital-view-previous-blood-requests.component.html',
  styleUrls: ['./hospital-view-previous-blood-requests.component.scss']
})
export class HospitalViewPreviousBloodRequestsComponent implements OnInit {

  constructor(public hospitalbloodrequestService: HospitalBloodRequestService, private router : Router) { }

  ngOnInit() {
    this.getHospitalPreviousOrders();
  }

  getHospitalPreviousOrders() {
    this.hospitalbloodrequestService.getHospitalPreviousOrders().subscribe((res) => {
      this.hospitalbloodrequestService.hospitalbloodrequests = res as HospitalBloodRequest[];
    });
  }

}
