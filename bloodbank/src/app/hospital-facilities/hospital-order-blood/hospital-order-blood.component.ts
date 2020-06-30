import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { HospitalBloodRequestService } from '../../shared/hospital-blood-request.service'
import { HospitalService } from '../../shared/hospital.service'

@Component({
  selector: 'app-hospital-order-blood',
  templateUrl: './hospital-order-blood.component.html',
  styleUrls: ['./hospital-order-blood.component.scss']
})
export class HospitalOrderBloodComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public hospitalbloodrequestService: HospitalBloodRequestService, public hospitalService: HospitalService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.hospitalbloodrequestService.postBloodOrder(form.value).subscribe(
    res => {
      this.showSucessMessage = true;
      setTimeout(() => this.showSucessMessage = false, 2000);
      this.resetForm(form);
      setTimeout(() => this.router.navigateByUrl('/hospital-order-blood'), 2500);
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

resetForm(form: NgForm) {

  this.hospitalbloodrequestService.selectedhospitalbloodrequest = {
    _id : '',
    date : '',
    contact : '',
    email : '',
    blood_group : '',
    quantity : '',
  };
  form.resetForm();
  this.serverErrorMessages = '';
}

}
