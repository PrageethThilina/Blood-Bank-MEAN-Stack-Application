import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
import { AdminService } from '../../shared/admin.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-main-admin-dashboard',
  templateUrl: './main-admin-dashboard.component.html',
  styleUrls: ['./main-admin-dashboard.component.scss']
})
export class MainAdminDashboardComponent implements OnInit {

constructor(private adminService: AdminService, private router: Router) { }

onLogout(){
    this.adminService.deleteToken();
    this.router.navigate(['/admin-login']);
  }

  ngOnInit() {

    var myChart = new Chart("myChart", {
        type: 'bar',
        data: {
            labels: ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'],
            datasets: [{
                label: 'Available Storage',
                data: [12, 19, 3, 5, 2, 3, 5, 2],
                backgroundColor: [
                    'red',
                    'Green',
                    'Yellow',
                    'Blue',
                    'Purple',
                    'Orange',
                    'Cyan',
                    'Grey'
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

}
