import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { Appointment } from '../../shared/appointment.model';
import { AppointmentService } from '../../shared/appointment.service'

@Component({
  selector: 'app-donor-view-previous-appointment',
  templateUrl: './donor-view-previous-appointment.component.html',
  styleUrls: ['./donor-view-previous-appointment.component.scss']
})
export class DonorViewPreviousAppointmentComponent implements OnInit {

  constructor(public appointmentService: AppointmentService, private router : Router) { }

  ngOnInit(): void {

    this.getDonorsPreviousAppointments();

  }

  getDonorsPreviousAppointments() {
    this.appointmentService.getDonorsPreviousAppointments().subscribe((res) => {
      this.appointmentService.appointments = res as Appointment[];
    });
  }

}
