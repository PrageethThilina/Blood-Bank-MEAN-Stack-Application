import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { DoneeService } from '../../shared/donee.service'

declare const pswrdvisible: any;
declare const repswrdvisible: any;


@Component({
  selector: 'app-donee-register',
  templateUrl: './donee-register.component.html',
  styleUrls: ['./donee-register.component.scss']
})
export class DoneeRegisterComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public doneeService: DoneeService, private router : Router) { }

  onSubmit(form: NgForm) {
    this.doneeService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 2000);
        this.resetForm(form);
        setTimeout(() => this.router.navigateByUrl('/donee-login'), 2500);
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

    this.doneeService.selectedUser = {
      donee_nic : '',
      full_name : '',
      gender : '',
      birthday : '',
      city : '',
      contact : '',
      email : '',
      blood_group : '',
      address : '',
      password : '',
      spouce : '',
      health : '',
      medical_report : ''
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

