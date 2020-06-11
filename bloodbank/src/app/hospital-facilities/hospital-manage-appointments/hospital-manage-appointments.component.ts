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

  hospitalDetails;
  showSucessMessage: boolean;

  constructor(public appointmentService: AppointmentService,private hospitalService: HospitalService, private router : Router) { }

  ngOnInit(): void {
    
    this.hospitalService.getUserProfile().subscribe(
      res => {
        this.hospitalDetails = res['hospital'];
      },
      err => { 
        console.log(err);
        
      }
    );

    this.getAppointments();


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
    doc.save('Available_Blood_Storage.pdf')

}

  getAppointments() {
    this.appointmentService.getHospitalAppointments().subscribe((res) => {
      this.appointmentService.appointments = res as Appointment[];
    });
  }
  
  onAccept(appointment: Appointment) {
    this.appointmentService.selectedAppointment = appointment;
  }

  onDelete(_id) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.appointmentService.manageappointments(_id).subscribe((res) => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 3000);
        this.getAppointments();
      });
    }
  }

}
