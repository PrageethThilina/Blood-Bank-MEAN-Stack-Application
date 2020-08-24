import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Appointment } from '../../../shared/appointment.model';
import { AppointmentService } from '../../../shared/appointment.service'

@Component({
  selector: 'app-accepted-appointment-count',
  templateUrl: './accepted-appointment-count.component.html',
  styleUrls: ['./accepted-appointment-count.component.scss']
})
export class AcceptedAppointmentCountComponent implements OnInit {

  accepted_appointments : number;

  constructor(public appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {

    this.appointmentService.gethospitalAcceptedAppointmentCount().subscribe(data => {
      this.accepted_appointments = data;

   });

  }

}
