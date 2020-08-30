import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { Donor } from '../../shared/donor.model';
import { DonorService } from '../../shared/donor.service';

import { Appointment } from '../../shared/appointment.model';
import { AppointmentService } from '../../shared/appointment.service'

@Component({
  selector: 'app-donor-view-previous-appointment',
  templateUrl: './donor-view-previous-appointment.component.html',
  styleUrls: ['./donor-view-previous-appointment.component.scss']
})
export class DonorViewPreviousAppointmentComponent implements OnInit {

  donorDetails;
  details;

  constructor(public donorService: DonorService, public appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {

    this.donorService.getUserProfile().subscribe(
      res => {
        this.donorDetails = res['donor'];
        console.log(this.donorDetails)
      },
      err => {
        console.log(err);

      }
    );

  }

  onEdit(donor: Donor) {
    this.donorService.selectedUser = donor;
    setTimeout(() => this.router.navigateByUrl('/book-appointments'));
  }

  getDonorsAppointments(id: string) {
    this.appointmentService.getDonorsAppointment(id).subscribe((res) => {
      this.appointmentService.appointments = res as Appointment[];
      this.details = res;
    });
  }

  getDonorsPreviousAppointments(id: string) {
    this.appointmentService.getDonorsPreviousAppointments(id).subscribe((res) => {
      this.appointmentService.appointments = res as Appointment[];
      this.details = res;
    });
  }


}
