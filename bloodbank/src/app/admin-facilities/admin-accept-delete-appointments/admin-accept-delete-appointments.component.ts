import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";


import { Appointment } from '../../shared/appointment.model';
import { AppointmentService } from '../../shared/appointment.service'

declare const toggleSidebar : any;
declare const changeStatus : any;


@Component({
  selector: 'app-admin-accept-delete-appointments',
  templateUrl: './admin-accept-delete-appointments.component.html',
  styleUrls: ['./admin-accept-delete-appointments.component.scss']
})
export class AdminAcceptDeleteAppointmentsComponent implements OnInit {

  showSucessMessage: boolean;
  acceptMessage: boolean;

  constructor(public appointmentService: AppointmentService, private router : Router) { }

  ngOnInit(): void {
    this.getAppointments();
  }



  getAppointments() {
    this.appointmentService.getAppointments().subscribe((res) => {
      this.appointmentService.appointments = res as Appointment[];
    });
  }

  onDelete(_id) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.appointmentService.manageappointments(_id).subscribe((res) => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 2000);
        this.getAppointments();
      });
    }
  }

  onEditnew(_id :string,
    donor_nic:string,
    location:string,
    date:string,
    time:string,
    contact:string,
    status:string,) {
    status = "Accepted";
    this.appointmentService.onEdit(_id,status).subscribe((res)=>{
    console.log(res);

  });
  }

  changeStatus(){
    changeStatus();
  }

  toggleSidebar(){ 
    toggleSidebar();
  }

}
