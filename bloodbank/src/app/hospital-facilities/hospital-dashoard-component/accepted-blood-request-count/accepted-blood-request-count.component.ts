import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { HospitalBloodRequest } from '../../../shared/hospital-blood-request.model';
import { HospitalBloodRequestService } from '../../../shared/hospital-blood-request.service'

@Component({
  selector: 'app-accepted-blood-request-count',
  templateUrl: './accepted-blood-request-count.component.html',
  styleUrls: ['./accepted-blood-request-count.component.scss']
})
export class AcceptedBloodRequestCountComponent implements OnInit {

  accepted_blood_requests : number;

  constructor(public hospitalbloodrequestService: HospitalBloodRequestService, private router: Router) { }

  ngOnInit(): void {

    this.hospitalbloodrequestService.get_each_hospital_accepted_blood_request_count().subscribe(data => {
      this.accepted_blood_requests = data;

   });
  }

}
