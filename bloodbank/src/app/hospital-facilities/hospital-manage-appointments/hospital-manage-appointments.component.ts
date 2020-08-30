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
  selector: 'app-hospital-manage-appointments',
  templateUrl: './hospital-manage-appointments.component.html',
  styleUrls: ['./hospital-manage-appointments.component.scss']
})
export class HospitalManageAppointmentsComponent implements OnInit {

  showSucessMessage: boolean;
  acceptMessage: boolean;
  show_container: boolean;

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
    doc.save('Accepted_appointment_List.pdf')

  }

  on_hospital_Accept(_id: string,
    donor_nic: string,
    location: string,
    date: string,
    time: string,
    contact: string,
    status: string, ) {
    if (confirm('Are you sure to Accept the Appointment ?') == true) {
      status = "Accepted";
      this.appointmentService.on_hospital_Accept(_id, status).subscribe((res) => {
        this.acceptMessage = true;
        setTimeout(() => this.acceptMessage = false, 3000);
        window.location.reload();
      });

    }
  }

  async getHospitalAppointments(location: string) {
    this.appointmentService.getHospitalAppointments(location).subscribe((res) => {
      this.show_container = true;
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
      setTimeout(() => this.router.navigateByUrl('/hospital-view-finished-appointments'));
      this.appointmentService.appointments = res as Appointment[];
      this.details = res;
    });
  }

  hospital_delete_pending_appointments(_id) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.appointmentService.hospital_delete_pending_appointments(_id).subscribe((res) => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 3000);
      });
    }
  }

}
