import { Component, OnInit } from '@angular/core';

import { Hospital } from '../../shared/hospital.model';
import { HospitalService } from '../../shared/hospital.service';

import { Appointment } from '../../shared/appointment.model';
import { AppointmentService } from '../../shared/appointment.service'

import { HospitalBloodRequestService } from '../../shared/hospital-blood-request.service'
import { HospitalBloodRequest } from 'src/app/shared/hospital-blood-request.model';

import { Router } from "@angular/router";

@Component({
  selector: 'app-hospital-header',
  templateUrl: './hospital-header.component.html',
  styleUrls: ['./hospital-header.component.scss']
})
export class HospitalHeaderComponent implements OnInit {

  hospitalDetails;
  details;

  constructor(public hospitalbloodrequestService: HospitalBloodRequestService, private hospitalService: HospitalService, public appointmentService: AppointmentService, private router: Router) { }


  ngOnInit(): void {
    this.hospitalService.getUserProfile().subscribe(
      res => {
        this.hospitalDetails = res['hospital'];
      },
      err => {
        console.log(err);

      }
    );
  }

  onEdit(hospital: Hospital) {
    this.hospitalService.selectedUser = hospital;
    setTimeout(() => this.router.navigateByUrl('/hospital-order-blood'));
  }

  onLogout() {
    this.hospitalService.deleteToken();
    this.router.navigate(['/hospital-login']);
  }

  getHospitalAppointments(location: string) {
    this.appointmentService.getHospitalAppointments(location).subscribe((res) => {
      setTimeout(() => this.router.navigateByUrl('/hospital-manage-appointments'));
      this.appointmentService.appointments = res as Appointment[];
      this.details = res;
    });
  }

  getHospitalPreviousOrders(hospital_name: string) {
    this.hospitalbloodrequestService.getHospitalPreviousOrders(hospital_name).subscribe((res) => {
      setTimeout(() => this.router.navigateByUrl('/hospital-view-previous-blood-requests'));
      this.hospitalbloodrequestService.hospitalbloodrequests = res as HospitalBloodRequest[];
    });
  }

}
