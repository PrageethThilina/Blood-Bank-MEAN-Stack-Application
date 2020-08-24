import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

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

  constructor(public appointmentService: AppointmentService, private router : Router) { }

  ngOnInit() {

    this.appointmentService.getHospitalAppointments().subscribe((res) => {
      this.appointmentService.appointments = res as Appointment[];
    });


  }

  onDownload(){

    const doc = new jsPDF('landscape')
    autoTable(doc, { html: '#my-table',
    body:[[{styles:{halign:'center'}}]],
    theme:'plain',
    headStyles:{ halign:'center',fontSize: 12,fontStyle: 'bold', fillColor:[221, 221, 221]},
    pageBreak:'avoid',
    showHead:'firstPage',
    margin: {top:10}
  })
    doc.save('Accepted_appointment_List.pdf')

}
  
on_hospital_Accept(_id: string,
  donor_nic: string,
  location: string,
  date: string,
  time: string,
  contact: string,
  status: string,) {
  if (confirm('Are you sure to Accept the Appointment ?') == true) {
    status = "Accepted";
    this.appointmentService.on_hospital_Accept(_id, status).subscribe((res) => {
      this.acceptMessage = true;
      setTimeout(() => this.acceptMessage = false, 3000);
      window.location.reload();
    });

  }
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
