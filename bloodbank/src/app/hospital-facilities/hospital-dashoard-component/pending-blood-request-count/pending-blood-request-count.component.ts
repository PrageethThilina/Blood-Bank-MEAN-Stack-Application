import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { HospitalBloodRequest } from '../../../shared/hospital-blood-request.model';
import { HospitalBloodRequestService } from '../../../shared/hospital-blood-request.service'

@Component({
  selector: 'app-pending-blood-request-count',
  templateUrl: './pending-blood-request-count.component.html',
  styleUrls: ['./pending-blood-request-count.component.scss']
})
export class PendingBloodRequestCountComponent implements OnInit {

  pending_blood_requests : number;

  constructor(public hospitalbloodrequestService: HospitalBloodRequestService, private router: Router) { }

  ngOnInit(): void {

    this.hospitalbloodrequestService.get_each_hospital_pending_blood_request_count().subscribe(data => {
      this.pending_blood_requests = data;

   });
  }

}
