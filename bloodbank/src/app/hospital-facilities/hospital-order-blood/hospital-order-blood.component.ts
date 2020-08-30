import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { HospitalBloodRequestService } from '../../shared/hospital-blood-request.service'
import { HospitalService } from '../../shared/hospital.service'
import { HospitalBloodRequest } from 'src/app/shared/hospital-blood-request.model';
import { Hospital } from '../../shared/hospital.model';

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
  show_container: boolean = false;
  show_container_btn: boolean = true;

  hospitalDetails;

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(public hospitalbloodrequestService: HospitalBloodRequestService, public hospitalService: HospitalService, private router: Router) { }

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

  getHospitalOrders(hospital_name: string) {
    this.hospitalbloodrequestService.getHospitalOrders(hospital_name).subscribe((res) => {
      this.hospitalbloodrequestService.hospitalbloodrequests = res as HospitalBloodRequest[];
    });
    this.show_container = true;
    this.show_container_btn = false;

  }

  onSubmit(form: NgForm) {
    this.hospitalbloodrequestService.postBloodOrder(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 2000);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong when adding.Please contact admin.';
      }
    );
    this.show_container = false;
    this.show_container_btn = true;
  }

  onCancel(_id) {
    if (confirm('Are you sure to Cancel the Order ?') == true) {
      this.hospitalbloodrequestService.hospital_cancel_order(_id).subscribe((res) => {
        this.ordershowSucessMessage = true;
        setTimeout(() => this.ordershowSucessMessage = false, 3000);
      });
    }
    this.show_container = false;
    this.show_container_btn = true;
  }


}
