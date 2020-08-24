import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Appointment } from '../../../shared/appointment.model';
import { AppointmentService } from '../../../shared/appointment.service'

@Component({
  selector: 'app-pending-appointment-count',
  templateUrl: './pending-appointment-count.component.html',
  styleUrls: ['./pending-appointment-count.component.scss']
})
export class PendingAppointmentCountComponent implements OnInit {

  pending_appointments : number;

  constructor(public appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {

    this.appointmentService.gethospitalpendingAppointmentCount().subscribe(data => {
      this.pending_appointments = data;

   });

  }

}
