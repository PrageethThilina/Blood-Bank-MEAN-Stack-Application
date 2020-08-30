import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { Donor } from '../shared/donor.model';
import { DonorService } from '../shared/donor.service';

import { Appointment } from '../shared/appointment.model';
import { AppointmentService } from '../shared/appointment.service'

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  constructor(public donorService: DonorService, public appointmentService: AppointmentService, private router: Router) { }

  showSucessMessage: boolean;
  donorDetails;
  details;
  show_container: boolean;

  ngOnInit() {
    this.donorService.getUserProfile().subscribe(
      res => {
        this.donorDetails = res['donor'];
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
    this.show_container = true;
    this.appointmentService.getDonorsAppointment(id).subscribe((res) => {
      this.appointmentService.appointments = res as Appointment[];
      this.details = res;
    });
  }

  getDonorsPreviousAppointments(id: string) {
    this.appointmentService.getDonorsPreviousAppointments(id).subscribe((res) => {
      setTimeout(() => this.router.navigateByUrl('/donor-view-previous-appointment'));
      this.appointmentService.appointments = res as Appointment[];
      this.details = res;
    });
  }

  onDelete(_id) {
    if (confirm('Are you sure to delete this record ?') == true) {

      this.appointmentService.managedonorappointments(_id).subscribe((res) => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 3000);
        window.location.reload();
      });
    }
  }

}
