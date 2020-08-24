import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { DoneeBloodRequest } from 'src/app/shared/donee-blood-request.model';
import { DoneeBloodRequestService } from '../../shared/donee-blood-request.service'

@Component({
  selector: 'app-view-blood-request',
  templateUrl: './view-blood-request.component.html',
  styleUrls: ['./view-blood-request.component.scss']
})
export class ViewBloodRequestComponent implements OnInit {

  requestshowSucessMessage: boolean;
  requestserverErrorMessages: string;
  acceptMessage: boolean;
  

  constructor(public doneebloodrequestService: DoneeBloodRequestService, private router : Router) { }

  ngOnInit() {
    this.getDoneeOrders();
  }

  getDoneeOrders() {
    this.doneebloodrequestService.getDoneeOrders().subscribe((res) => {
      this.doneebloodrequestService.doneebloodrequests = res as DoneeBloodRequest[];
    });
  }

  onCancel(_id) {
    if (confirm('Are you sure to Cancel the Request ?') == true) {
      this.doneebloodrequestService.donee_cancel_request(_id).subscribe((res) => {
        this.requestshowSucessMessage = true;
        setTimeout(() => this.requestshowSucessMessage = false, 3000);
        this.getDoneeOrders();
        location.reload();
      });
    }
  }

  onSuccess( _id: string,
    date: string,
    email: string,
    blood_group: string,
    spouce: string,
    health: string,
    status: string,) {
    if (confirm('Are you sure to Save the changes ?') == true) {
      status = "Found";
      this.doneebloodrequestService.onSuccess(_id, status).subscribe((res) => {
        console.log(res);
        this.acceptMessage = true;
        setTimeout(() => this.acceptMessage = false, 3000);
        window.location.reload();
      });

    }

  }
  
  onUpdate(doneebloodrequest: DoneeBloodRequest) {
    this.doneebloodrequestService.selecteddoneebloodrequest = doneebloodrequest;
    setTimeout(() => this.router.navigateByUrl('/update-blood-request'));
  }

}
