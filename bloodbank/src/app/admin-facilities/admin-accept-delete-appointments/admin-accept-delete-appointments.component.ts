import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";


import { Appointment } from '../../shared/appointment.model';
import { AppointmentService } from '../../shared/appointment.service'

@Component({
  selector: 'app-admin-accept-delete-appointments',
  templateUrl: './admin-accept-delete-appointments.component.html',
  styleUrls: ['./admin-accept-delete-appointments.component.scss']
})
export class AdminAcceptDeleteAppointmentsComponent implements OnInit {

  showSucessMessage: boolean;

  constructor(public appointmentService: AppointmentService, private router : Router) { }

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments() {
    this.appointmentService.getAppointments().subscribe((res) => {
      this.appointmentService.appointments = res as Appointment[];
    });
  }
  
  onAccept(appointment: Appointment) {
    this.appointmentService.selectedAppointment = appointment;
    setTimeout(() => this.router.navigateByUrl('/update-blood-storage'));
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

}
