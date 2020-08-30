import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../shared/hospital.service';
import { Router } from "@angular/router";
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

import { Appointment } from '../shared/appointment.model';
import { AppointmentService } from '../shared/appointment.service'

import { HospitalBloodRequest } from '../shared/hospital-blood-request.model';
import { HospitalBloodRequestService } from '../shared/hospital-blood-request.service'

@Component({
  selector: 'app-hospital-facilities',
  templateUrl: './hospital-facilities.component.html',
  styleUrls: ['./hospital-facilities.component.scss']
})
export class HospitalFacilitiesComponent implements OnInit {

  pending_appointments: number;
  accepted_appointments: number;
  finished_appointments: number;
  accepted_blood_requests: number;
  pending_blood_requests: number;
  hospitalDetails;
  details;
  show_stat: boolean;
  show_stat_btn: boolean = true;

  constructor(private hospitalService: HospitalService, private hospitalbloodrequestService: HospitalBloodRequestService, public appointmentService: AppointmentService, private router: Router) { }

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

  onLogout() {
    this.hospitalService.deleteToken();
    this.router.navigate(['/hospital-login']);
  }

  onDownload() {

    const doc = new jsPDF()
    autoTable(doc, {
      html: '#my-table',
      theme: 'plain',
      headStyles: { halign: 'center', fontSize: 20, fontStyle: 'bold', fillColor: [221, 221, 221] },
      columnStyles: { 0: { fontSize: 10, fontStyle: 'bold' } },
      margin: { top: 10 }
    })
    doc.save('Hospital_Profile.pdf')

  }

  getStat(location: string) {
    this.appointmentService.gethospitalpendingAppointmentCount(location).subscribe(data => {
      console.log(this.hospitalDetails.hospital_name);
      this.pending_appointments = data;

    });

    this.appointmentService.gethospitalAcceptedAppointmentCount(location).subscribe(data => {
      this.accepted_appointments = data;

    });

    this.appointmentService.gethospitalfinishedAppointmentCount(location).subscribe(data => {
      this.finished_appointments = data;

      this.hospitalbloodrequestService.get_each_hospital_accepted_blood_request_count(location).subscribe(data => {
        this.accepted_blood_requests = data;

      });

      this.hospitalbloodrequestService.get_each_hospital_pending_blood_request_count(location).subscribe(data => {
        this.pending_blood_requests = data;

      });

    });
    this.show_stat = true;
    this.show_stat_btn = false;
  }

}
