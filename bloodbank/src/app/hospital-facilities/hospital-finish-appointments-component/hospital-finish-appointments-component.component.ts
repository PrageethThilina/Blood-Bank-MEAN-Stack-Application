import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable';

import { Hospital } from '../../shared/hospital.model';
import { HospitalService } from '../../shared/hospital.service';

import { Appointment } from '../../shared/appointment.model';
import { AppointmentService } from '../../shared/appointment.service';

@Component({
  selector: 'app-hospital-finish-appointments-component',
  templateUrl: './hospital-finish-appointments-component.component.html',
  styleUrls: ['./hospital-finish-appointments-component.component.scss']
})
export class HospitalFinishAppointmentsComponentComponent implements OnInit {

  showSucessMessage: boolean;
  finishMessage: boolean;
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
  
onEdion_hospital_Finishtnew(_id: string,
  donor_nic: string,
  location: string,
  date: string,
  time: string,
  contact: string,
  status: string,) {
  if (confirm('Are you sure to Accept the Appointment ?') == true) {
    status = "Finished";
    this.appointmentService.on_hospital_Finish(_id, status).subscribe((res) => {
      console.log(res);
      this.finishMessage = true;
      setTimeout(() => this.finishMessage = false, 3000);
      window.location.reload();
    });

  }
}

getHospitalAppointments(location : string) {
  this.appointmentService.getHospitalAppointments(location).subscribe((res) => {
    setTimeout(() => this.router.navigateByUrl('/hospital-manage-appointments'));
    this.appointmentService.appointments = res as Appointment[];
    this.details = res;
  });
}

getHospitalAcceptedAppointments(location : string) {
  this.appointmentService.getHospitalAcceptedAppointments(location).subscribe((res) => {
    this.appointmentService.appointments = res as Appointment[];
    this.details = res;
  });
}

getHospitalFinishedAppointments(location : string) {
  this.appointmentService.getHospitalFinishedAppointments(location).subscribe((res) => {
    setTimeout(() => this.router.navigateByUrl('/hospital-view-finished-appointments'));
    this.appointmentService.appointments = res as Appointment[];
    this.details = res;
  });
}

hospital_delete_accepted_appointments(_id) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.appointmentService.hospital_delete_accepted_appointments(_id).subscribe((res) => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 3000);
        window.location.reload();

      });
    }
  }

}
