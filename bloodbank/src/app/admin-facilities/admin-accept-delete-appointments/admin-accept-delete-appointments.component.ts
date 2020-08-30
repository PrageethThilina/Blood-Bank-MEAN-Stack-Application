import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";


import { Appointment } from '../../shared/appointment.model';
import { AppointmentService } from '../../shared/appointment.service'

declare const toggleSidebar: any;


@Component({
  selector: 'app-admin-accept-delete-appointments',
  templateUrl: './admin-accept-delete-appointments.component.html',
  styleUrls: ['./admin-accept-delete-appointments.component.scss']
})
export class AdminAcceptDeleteAppointmentsComponent implements OnInit {

  showSucessMessage: boolean;
  acceptMessage: boolean;

  constructor(public appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {
    this.getAppointments();
  }

  //get appointments
  getAppointments() {
    this.appointmentService.getPendingAppointments().subscribe((res) => {
      this.appointmentService.appointments = res as Appointment[];
    });
  }

  //delete appointment
  onDelete(_id) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.appointmentService.manageappointments(_id).subscribe((res) => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 2000);
        this.getAppointments();
      });
    }
  }

  //accpet appointment
  onEditnew(_id: string,
    donor_nic: string,
    location: string,
    date: string,
    time: string,
    contact: string,
    status: string, ) {
    if (confirm('Are you sure to Accept the Appointment ?') == true) {
      status = "Accepted";
      this.appointmentService.onEdit(_id, status).subscribe((res) => {
        console.log(res);
        this.acceptMessage = true;
        setTimeout(() => this.acceptMessage = false, 3000);
        window.location.reload();
      });

    }
  }

  toggleSidebar() {
    toggleSidebar();
  }

}
