import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { HospitalBloodRequest } from '../../../shared/hospital-blood-request.model';
import { HospitalBloodRequestService } from '../../../shared/hospital-blood-request.service'

@Component({
  selector: 'app-hospital-blood-request-table',
  templateUrl: './hospital-blood-request-table.component.html',
  styleUrls: ['./hospital-blood-request-table.component.scss']
})
export class HospitalBloodRequestTableComponent implements OnInit {

  constructor(public hospitalbloodrequestService: HospitalBloodRequestService, private router: Router) { }

  ngOnInit(): void {

    this.getPendingHospitalBloodRequests_here();

  }

  getPendingHospitalBloodRequests_here() {
    this.hospitalbloodrequestService.getPendingHospitalBloodRequests().subscribe((res) => {
      this.hospitalbloodrequestService.hospitalbloodrequests = res as HospitalBloodRequest[];
    });
  }


}
