import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

import { Hospital } from '../../shared/hospital.model';
import { HospitalService } from '../../shared/hospital.service';

import { Appointment } from '../../shared/appointment.model';
import { AppointmentService } from '../../shared/appointment.service'

@Component({
  selector: 'app-hospital-view-finished-appointments',
  templateUrl: './hospital-view-finished-appointments.component.html',
  styleUrls: ['./hospital-view-finished-appointments.component.scss']
})
export class HospitalViewFinishedAppointmentsComponent implements OnInit {

  hospitalDetails;
  details;

  constructor(private hospitalService: HospitalService, public appointmentService: AppointmentService, private router: Router) { }

  ngOnInit() {

    this.hospitalService.getUserProfile().subscribe(
      res => {
        this.hospitalDetails = res['hospital'];
      },
      err => {
        console.log(err);

      }
    );


  }

  getHospitalAppointments(location: string) {
    this.appointmentService.getHospitalAppointments(location).subscribe((res) => {
      setTimeout(() => this.router.navigateByUrl('/hospital-manage-appointments'));
      this.appointmentService.appointments = res as Appointment[];
      this.details = res;
    });
  }

  getHospitalAcceptedAppointments(location: string) {
    this.appointmentService.getHospitalAcceptedAppointments(location).subscribe((res) => {
      setTimeout(() => this.router.navigateByUrl('/hospital-finish-appointments'));
      this.appointmentService.appointments = res as Appointment[];
      this.details = res;
    });
  }

  getHospitalFinishedAppointments(location: string) {
    this.appointmentService.getHospitalFinishedAppointments(location).subscribe((res) => {
      this.appointmentService.appointments = res as Appointment[];
      this.details = res;
    });
  }

  onDownload() {

    const doc = new jsPDF('landscape')
    autoTable(doc, {
      html: '#my-table',
      body: [[{ styles: { halign: 'center' } }]],
      theme: 'plain',
      headStyles: { halign: 'center', fontSize: 12, fontStyle: 'bold', fillColor: [221, 221, 221] },
      pageBreak: 'avoid',
      showHead: 'firstPage',
      margin: { top: 10 }
    })
    doc.save('Finished_appointment_list.pdf')

  }

}
