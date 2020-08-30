import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Appointment } from '../../../shared/appointment.model';
import { AppointmentService } from '../../../shared/appointment.service'

import { Hospital } from '../../../shared/hospital.model';
import { HospitalService } from '../../../shared/hospital.service';

@Component({
  selector: 'app-accepted-appointment-count',
  templateUrl: './accepted-appointment-count.component.html',
  styleUrls: ['./accepted-appointment-count.component.scss']
})
export class AcceptedAppointmentCountComponent implements OnInit {

  accepted_appointments : number;
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

    this.appointmentService.gethospitalAcceptedAppointmentCount(this.hospitalDetails.hospital_name).subscribe(data => {
      this.accepted_appointments = data;

   });

  }

}
