import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { HospitalBloodRequestService } from '../../shared/hospital-blood-request.service'
import { HospitalService } from '../../shared/hospital.service'
import { HospitalBloodRequest } from 'src/app/shared/hospital-blood-request.model';

@Component({
  selector: 'app-hospital-order-blood',
  templateUrl: './hospital-order-blood.component.html',
  styleUrls: ['./hospital-order-blood.component.scss']
})
export class HospitalOrderBloodComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;
  ordershowSucessMessage: boolean;
  orderserverErrorMessages: string;

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(public hospitalbloodrequestService: HospitalBloodRequestService, public hospitalService: HospitalService, private router : Router) { }

  ngOnInit() {

    this.hospitalbloodrequestService.getHospitalOrders().subscribe((res) => {
      this.hospitalbloodrequestService.hospitalbloodrequests = res as HospitalBloodRequest[];
    });

  }

  onSubmit(form: NgForm) {
    this.hospitalbloodrequestService.postBloodOrder(form.value).subscribe(
    res => {
      this.showSucessMessage = true;
      setTimeout(() => this.showSucessMessage = false, 2000);
      location.reload();
    },
    err => {
      if (err.status === 422) {
        this.serverErrorMessages = err.error.join('<br/>');
      }
      else
        this.serverErrorMessages = 'Something went wrong when adding.Please contact admin.';
    }
    );
}

  onCancel(_id) {
    if (confirm('Are you sure to Cancel the Order ?') == true) {
      this.hospitalbloodrequestService.hospital_cancel_order(_id).subscribe((res) => {
        this.ordershowSucessMessage = true;
        setTimeout(() => this.ordershowSucessMessage = false, 3000);
        location.reload();
      });
    }
  }


}
