import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Appointment } from '../../../shared/appointment.model';
import { AppointmentService } from '../../../shared/appointment.service'

import { Hospital } from '../../../shared/hospital.model';
import { HospitalService } from '../../../shared/hospital.service';

@Component({
  selector: 'app-pending-appointment-count',
  templateUrl: './pending-appointment-count.component.html',
  styleUrls: ['./pending-appointment-count.component.scss']
})
export class PendingAppointmentCountComponent implements OnInit {

  pending_appointments : number;
  hospitalDetails;
  details;

  constructor(private hospitalService: HospitalService,public appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {

    this.hospitalService.getUserProfile().subscribe(
      res => {
        this.hospitalDetails = res['hospital'];
        console.log(this.hospitalDetails);
      },
      err => { 
        console.log(err);
        
      }
    );

    this.appointmentService.gethospitalpendingAppointmentCount(this.hospitalService.selectedUser.hospital_name).subscribe(data => {
      console.log(this.hospitalDetails.hospital_name);
      this.pending_appointments = data;

   });

  }

}
