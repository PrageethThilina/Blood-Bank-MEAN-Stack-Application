import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { DoneeBloodRequest } from '../../../shared/donee-blood-request.model';
import { DoneeBloodRequestService } from '../../../shared/donee-blood-request.service'

@Component({
  selector: 'app-donee-requests-count',
  templateUrl: './donee-requests-count.component.html',
  styleUrls: ['./donee-requests-count.component.scss']
})
export class DoneeRequestsCountComponent implements OnInit {

  donee_blood_requests : number;
            
         constructor(public doneebloodrequestService: DoneeBloodRequestService, private router: Router) { }
            
          ngOnInit(): void {
            
                this.doneebloodrequestService.get_donee_blood_requests().subscribe(data => {
                  this.donee_blood_requests = data;
            
               });
          }

}
