import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Appointment } from '../../../shared/appointment.model';
import { AppointmentService } from '../../../shared/appointment.service'

@Component({
  selector: 'app-finished-appointment-count',
  templateUrl: './finished-appointment-count.component.html',
  styleUrls: ['./finished-appointment-count.component.scss']
})
export class FinishedAppointmentCountComponent implements OnInit {

  finished_appointments : number;

  constructor(public appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {

    this.appointmentService.gethospitalfinishedAppointmentCount().subscribe(data => {
      this.finished_appointments = data;

   });
  }
}
