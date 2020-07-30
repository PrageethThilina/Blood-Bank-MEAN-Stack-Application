import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { DoneeService } from '../../shared/donee.service'

declare const pswrdvisible: any;

@Component({
  selector: 'app-update-donee-details',
  templateUrl: './update-donee-details.component.html',
  styleUrls: ['./update-donee-details.component.scss']
})
export class UpdateDoneeDetailsComponent implements OnInit {

  showupdateSucessMessage: boolean;
  serverErrorMessages: string;

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(public doneeService: DoneeService, private router : Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.doneeService.updateDonee(form.value).subscribe((res) => {
      this.showupdateSucessMessage = true;
      setTimeout(() => this.showupdateSucessMessage = false, 2000);
      this.resetForm(form);
      setTimeout(() => this.router.navigateByUrl('/donee-facilities'), 2500);
    });
  }

  resetForm(form: NgForm) {

    this.doneeService.selectedUser = {
      _id : '',
      donee_nic : '', 
      full_name : '',
      gender : '',
      birthday : '',
      province : '',
      district : '',
      contact : '',
      email : '',
      blood_group : '',
      address : '',
      password : '',
      spouce : '',
      health : '',
    };

    form.resetForm();
    this.serverErrorMessages = '';
  }

  pswrdvisible()
  {
    pswrdvisible();
  }

}
