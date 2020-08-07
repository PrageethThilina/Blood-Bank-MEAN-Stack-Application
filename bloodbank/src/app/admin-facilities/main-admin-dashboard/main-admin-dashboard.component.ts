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

    var myChart = new Chart("myChart2", {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September','October','November','December'],
            datasets: [{
                label: 'Received Storage',
                data: [50, 60, 70, 40, 10, 20, 90, 100, 30, 40, 10, 40],
                backgroundColor: [
                    'red',
                    'Green',
                    'Yellow',
                    'Blue',
                    'Purple',
                    'Orange',
                    'Cyan',
                    'Grey',
                    'Brown',
                    'Black',
                    'green',
                    'yellow'
                ],
                borderColor: [
                    'black',
                    'black',
                    'black', 
                    'black', 
                    'black', 
                    'black', 
                    'black', 
                    'black', 
                    'black', 
                    'black', 
                    'black', 
                    'black',      
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var myChart = new Chart("myChart3", {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September','October','November','December'],
            datasets: [{
                label: 'Issued Storage',
                data: [20, 60, 50, 40, 10, 30, 90, 100, 30, 10, 10, 90],
                backgroundColor: [
                    'red',
                    'Green',
                    'Yellow',
                    'Blue',
                    'Purple',
                    'Orange',
                    'Cyan',
                    'Grey',
                    'Brown',
                    'Black',
                    'green',
                    'yellow'
                ],
                borderColor: [
                    'black',
                    'black',
                    'black', 
                    'black', 
                    'black', 
                    'black', 
                    'black', 
                    'black', 
                    'black', 
                    'black', 
                    'black', 
                    'black',      
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

  }


  toggleSidebar(){ 
    toggleSidebar();
  }

}
