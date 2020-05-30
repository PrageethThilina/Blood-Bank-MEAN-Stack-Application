import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { DonorService } from '../../shared/donor.service'


declare const pswrdvisible: any;
declare const repswrdvisible: any;

@Component({
  selector: 'app-donor-register',
  templateUrl: './donor-register.component.html',
  styleUrls: ['./donor-register.component.scss'],

})
export class DonorRegisterComponent {

emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public donorService: DonorService, private router : Router) { }

  onSubmit(form: NgForm) {
    this.donorService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
        setTimeout(() => this.router.navigateByUrl('/donor-login'), 5000);
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
      photo : ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

  ngOnInit(): void {
  }

  angpswrdVisible(){
    pswrdvisible();
  }

  angrepswrdVisible(){
    repswrdvisible();
  } 

}
