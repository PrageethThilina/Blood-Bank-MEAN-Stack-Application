import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { DonorService } from '../../shared/donor.service'

declare const pswrdvisible: any;
declare const repswrdvisible: any;
declare const validateDetails: any;

@Component({
  selector: 'app-add-donors',
  templateUrl: './add-donors.component.html',
  styleUrls: ['./add-donors.component.scss']
})
export class AddDonorsComponent {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public donorService: DonorService, private router : Router) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    
    this.donorService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 2000);
        this.resetForm(form);
        setTimeout(() => this.router.navigateByUrl('/hospital-facilities'), 2500);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  resetForm(form: NgForm) {

    this.donorService.selectedUser = {
      _id : '',
      donor_nic : '',
      full_name : '',
      gender : '',
      birthday : '',
      last_donate_date : '',
      province : '',
      district : '',
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
      profile_status: '',
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

  angpswrdVisible(){
    pswrdvisible();
  }

  angrepswrdVisible(){
    repswrdvisible();
  } 

  validateDetails(){
    validateDetails();
  } 

}
