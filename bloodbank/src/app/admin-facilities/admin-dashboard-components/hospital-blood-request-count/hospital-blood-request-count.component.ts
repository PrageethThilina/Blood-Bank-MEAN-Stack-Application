import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { HospitalBloodRequest } from '../../../shared/hospital-blood-request.model';
import { HospitalBloodRequestService } from '../../../shared/hospital-blood-request.service'

@Component({
  selector: 'app-hospital-blood-request-count',
  templateUrl: './hospital-blood-request-count.component.html',
  styleUrls: ['./hospital-blood-request-count.component.scss']
})
export class HospitalBloodRequestCountComponent implements OnInit {

    hospital_blood_requests : number;
              
           constructor(public hospitalbloodrequestService: HospitalBloodRequestService, private router: Router) { }
              
            ngOnInit(): void {
              
                  this.hospitalbloodrequestService.get_hospital_blood_request_count().subscribe(data => {
                    this.hospital_blood_requests = data;
              
                 });
            }

}
