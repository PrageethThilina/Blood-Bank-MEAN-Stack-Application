import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { Appointment } from '../../shared/appointment.model';
import { AppointmentService } from '../../shared/appointment.service'

@Component({
  selector: 'app-admin-view-appointments',
  templateUrl: './admin-view-appointments.component.html',
  styleUrls: ['./admin-view-appointments.component.scss']
})
export class AdminViewAppointmentsComponent implements OnInit {

  constructor(public appointmentService: AppointmentService, private router : Router) { }

  ngOnInit(): void {
    this.refreshBloodInventoryList();
  }

  refreshBloodInventoryList() {
    this.appointmentService.getAppointments().subscribe((res) => {
      this.appointmentService.appointments = res as Appointment[];
    });
  }

}
