import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Appointment } from '../../../shared/appointment.model';
import { AppointmentService } from '../../../shared/appointment.service'

@Component({
  selector: 'app-pending-appointments',
  templateUrl: './pending-appointments.component.html',
  styleUrls: ['./pending-appointments.component.scss']
})
export class PendingAppointmentsComponent implements OnInit {

  current_appointments : number;

  constructor(public appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {

    this.appointmentService.getAppointmentCount().subscribe(data => {
      this.current_appointments = data;

   });
  }

}
