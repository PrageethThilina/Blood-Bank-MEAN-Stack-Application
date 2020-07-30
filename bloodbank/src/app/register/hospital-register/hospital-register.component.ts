import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { HospitalService } from '../../shared/hospital.service'

@Component({
  selector: 'app-hospital-register',
  templateUrl: './hospital-register.component.html',
  styleUrls: ['./hospital-register.component.scss'],
})
export class HospitalRegisterComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public hospitalService: HospitalService, private router : Router) { }

  onSubmit(form: NgForm) {
    this.hospitalService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 2000);
        this.resetForm(form);
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

    this.hospitalService.selectedUser = {
      _id: '',
      hospital_name : '',
      address : '',
      contact : '',
      email : '',
      hospital_username : '',
      password : '',
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

  ngOnInit(): void {
  }

}
