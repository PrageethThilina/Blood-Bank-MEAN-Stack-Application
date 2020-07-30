import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { DoneeBloodRequest } from 'src/app/shared/donee-blood-request.model';
import { DoneeBloodRequestService } from '../../shared/donee-blood-request.service';

@Component({
  selector: 'app-update-blood-request',
  templateUrl: './update-blood-request.component.html',
  styleUrls: ['./update-blood-request.component.scss']
})
export class UpdateBloodRequestComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(public doneebloodrequestService: DoneeBloodRequestService, private router : Router) { }

  ngOnInit() {
    
  }


    onSubmit(form: NgForm) {
      this.doneebloodrequestService.updateBloodRequest(form.value).subscribe((res) => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 2000);
        this.resetForm(form);
        setTimeout(() => this.router.navigateByUrl('/view-blood-request'), 2500);
      });
    }
  
    resetForm(form: NgForm) {
  
      this.doneebloodrequestService.selecteddoneebloodrequest = {
        _id: '',
        donee_id: '',
        donee_nic: '',
        full_name: '',
        gender: '',
        birthday: '',
        province: '',
        district: '',
        contact: '',
        email: '',
        blood_group: '',
        address: '',
        spouce: '',
        health: '',
        medical_report: '',
      };
  
      form.resetForm();
      this.serverErrorMessages = '';
    }
}

