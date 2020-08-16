import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
import { AdminService } from '../../shared/admin.service';
import { Router } from "@angular/router";

import { NgForm } from '@angular/forms';

import { HospitalBloodRequest } from '../../shared/hospital-blood-request.model';
import { HospitalBloodRequestService } from '../../shared/hospital-blood-request.service'

import { Appointment } from '../../shared/appointment.model';
import { AppointmentService } from '../../shared/appointment.service'

declare const toggleSidebar : any;

@Component({
  selector: 'app-main-admin-dashboard',
  templateUrl: './main-admin-dashboard.component.html',
  styleUrls: ['./main-admin-dashboard.component.scss']
})
export class MainAdminDashboardComponent implements OnInit {

constructor(private adminService: AdminService,public hospitalbloodrequestService: HospitalBloodRequestService,public appointmentService: AppointmentService, private router: Router) { }

onLogout(){
    this.adminService.deleteToken();
    this.router.navigate(['/admin-login']);

}

  ngOnInit() {

  }


  toggleSidebar(){ 
    toggleSidebar();
  }

}
