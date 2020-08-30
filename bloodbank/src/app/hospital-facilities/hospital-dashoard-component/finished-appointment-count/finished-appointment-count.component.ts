import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Appointment } from '../../../shared/appointment.model';
import { AppointmentService } from '../../../shared/appointment.service'

import { Hospital } from '../../../shared/hospital.model';
import { HospitalService } from '../../../shared/hospital.service';

@Component({
  selector: 'app-finished-appointment-count',
  templateUrl: './finished-appointment-count.component.html',
  styleUrls: ['./finished-appointment-count.component.scss']
})
export class FinishedAppointmentCountComponent implements OnInit {

  finished_appointments : number;
  hospitalDetails;
  details;

  constructor(private hospitalService: HospitalService,public appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {

    this.hospitalService.getUserProfile().subscribe(
      res => {
        this.hospitalDetails = res['hospital'];
      },
      err => { 
        console.log(err);
        
      }
    );

    this.appointmentService.gethospitalfinishedAppointmentCount(this.hospitalDetails.hospital_name).subscribe(data => {
      this.finished_appointments = data;

   });
  }
}
