import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { Donor } from '../shared/donor.model';
import { DonorService } from '../shared/donor.service';

import { Appointment } from '../shared/appointment.model';
import { AppointmentService } from '../shared/appointment.service'

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  constructor(public donorService: DonorService, public appointmentService: AppointmentService, private router : Router) { }
  
  showSucessMessage: boolean;
  donorDetails;
  
  ngOnInit() {
    this.donorService.getUserProfile().subscribe(
      res => {
        this.donorDetails = res['donor'];
      },
      err => { 
        console.log(err);
        
      }
    );
    this.getDonorsAppointments()
  }

  onEdit(donor: Donor) {
    this.donorService.selectedUser = donor;
    setTimeout(() => this.router.navigateByUrl('/book-appointments'));
  }
  
  getDonorsAppointments() {
    this.appointmentService.getDonorsAppointments().subscribe((res) => {
      this.appointmentService.appointments = res as Appointment[];
    });
  }

  onDelete(_id) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.appointmentService.managedonorappointments(_id).subscribe((res) => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 3000);
        this.getDonorsAppointments();
      });
    }
  }

}
