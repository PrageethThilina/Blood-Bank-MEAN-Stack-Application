import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { DonorService } from '../../shared/donor.service'

declare const pswrdvisible: any;
declare const validateUpdateDetails: any;

@Component({
  selector: 'app-update-donor-details',
  templateUrl: './update-donor-details.component.html',
  styleUrls: ['./update-donor-details.component.scss']
})
export class UpdateDonorDetailsComponent implements OnInit {

  showupdateSucessMessage: boolean;
  serverErrorMessages: string;

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

constructor(public donorService: DonorService, private router : Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.donorService.updateDonor(form.value).subscribe((res) => {
      this.showupdateSucessMessage = true;
      setTimeout(() => this.showupdateSucessMessage = false, 2000);
      this.resetForm(form);
      setTimeout(() => this.router.navigateByUrl('/donor-facilities'), 2500);
    });
  }

  resetForm(form: NgForm) {

    this.donorService.selectedUser = {
      _id : '',
      donor_nic : '', 
      full_name : '',
      gender : '',
      birthday : '',
      last_donate_date : '',
      city : '',
      weight : '',
      height : '',
      blood_group : '',
      address : '',
      email : '',
      contact : '',
      password : '',
      spouce : '',
      health : '',
      photo : '',
    };

    form.resetForm();
    this.serverErrorMessages = '';
  }

  pswrdvisible()
  {
    pswrdvisible();
  }

  validateUpdateDetails(){
    validateUpdateDetails();
  }
}
