import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { AppointmentService } from '../../shared/appointment.service'
import { DonorService } from '../../shared/donor.service'
import { Appointment } from 'src/app/shared/appointment.model';

declare const checkDonateEligibility: any; 

@Component({
  selector: 'app-book-appointments',
  templateUrl: './book-appointments.component.html',
  styleUrls: ['./book-appointments.component.scss']
})
export class BookAppointmentsComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public appointmentService: AppointmentService, public donorService: DonorService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
      this.appointmentService.postAppointment(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 2000);
        this.resetForm(form);
        setTimeout(() => this.router.navigateByUrl('/appointments'), 2500);
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

    this.appointmentService.selectedAppointment = {
      _id : '',
      donor_id: '',
      location : '',
      date : '',
      time : '',
      full_name : '',
      email: '',
      donor_nic: '',
      contact: '',
      status: '',

    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

  checkDonateEligibility(){
    checkDonateEligibility();
  }

}
