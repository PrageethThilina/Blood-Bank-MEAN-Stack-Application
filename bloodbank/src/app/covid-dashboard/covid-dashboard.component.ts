import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Covid19DashboardService } from '../shared/covid-19-dashboard.service.service';
import { Chart } from 'node_modules/chart.js';



@Component({
  selector: 'app-covid-dashboard',
  templateUrl: './covid-dashboard.component.html',
  styleUrls: ['./covid-dashboard.component.scss']
})
export class CovidDashboardComponent implements OnInit {

  deaths : number;
  constructor(public covidService: Covid19DashboardService, private router : Router) { }

  ngOnInit(): void {
    this.covidService.getStatistics().subscribe(res => {
      console.log(res);
      
     this.deaths = res;

    })
  }

}
