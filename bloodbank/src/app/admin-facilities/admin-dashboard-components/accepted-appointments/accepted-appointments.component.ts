import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Appointment } from '../../../shared/appointment.model';
import { AppointmentService } from '../../../shared/appointment.service'

@Component({
  selector: 'app-accepted-appointments',
  templateUrl: './accepted-appointments.component.html',
  styleUrls: ['./accepted-appointments.component.scss']
})
export class AcceptedAppointmentsComponent implements OnInit {

  accepted_appointments : number;

  constructor(public appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {

    this.appointmentService.getAcceptedAppointmentCount().subscribe(data => {
      this.accepted_appointments = data;

   });
  }

}
