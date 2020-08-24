import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

import { Appointment } from '../../shared/appointment.model';
import { AppointmentService } from '../../shared/appointment.service'

@Component({
  selector: 'app-hospital-view-finished-appointments',
  templateUrl: './hospital-view-finished-appointments.component.html',
  styleUrls: ['./hospital-view-finished-appointments.component.scss']
})
export class HospitalViewFinishedAppointmentsComponent implements OnInit {

  constructor(public appointmentService: AppointmentService, private router : Router) { }

  ngOnInit() {

    this.appointmentService.getHospitalFinishedAppointments().subscribe((res) => {
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
    doc.save('Finished_appointment_list.pdf')

}

}
