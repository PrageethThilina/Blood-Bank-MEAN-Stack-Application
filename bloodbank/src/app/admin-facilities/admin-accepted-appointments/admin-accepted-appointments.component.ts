import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";


import { Appointment } from '../../shared/appointment.model';
import { AppointmentService } from '../../shared/appointment.service'

declare const toggleSidebar: any;

@Component({
  selector: 'app-admin-accepted-appointments',
  templateUrl: './admin-accepted-appointments.component.html',
  styleUrls: ['./admin-accepted-appointments.component.scss']
})
export class AdminAcceptedAppointmentsComponent implements OnInit {

  showSucessMessage: boolean;
  finishMessage: boolean;

  constructor(public appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments() {
    this.appointmentService.getAcceptedAppointments().subscribe((res) => {
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

  onFinished(_id: string,
    donor_nic: string,
    location: string,
    date: string,
    time: string,
    contact: string,
    status: string,) {
    if (confirm('Are you sure to Accept the Appointment ?') == true) {
      status = "Finished";
      this.appointmentService.onFinished(_id, status).subscribe((res) => {
        console.log(res);
        this.finishMessage = true;
        setTimeout(() => this.finishMessage = false, 2000);
        window.location.reload();
      });

    }
  }

  toggleSidebar() {
    toggleSidebar();
  }

}
