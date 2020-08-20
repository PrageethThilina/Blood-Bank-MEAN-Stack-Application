import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Appointment } from '../../../shared/appointment.model';
import { AppointmentService } from '../../../shared/appointment.service'

@Component({
  selector: 'app-finished-appointments',
  templateUrl: './finished-appointments.component.html',
  styleUrls: ['./finished-appointments.component.scss']
})
export class FinishedAppointmentsComponent implements OnInit {

  finished_appointments : number;

  constructor(public appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {

    this.appointmentService.getfinishedAppointmentCount().subscribe(data => {
      this.finished_appointments = data;

   });

  }

}
