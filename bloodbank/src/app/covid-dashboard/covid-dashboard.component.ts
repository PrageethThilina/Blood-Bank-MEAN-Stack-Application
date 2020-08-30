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

  global_deaths : number;
  global_new_cases : number;
  global_new_deaths : number;
  global_recovered : number;
  global_total_cases : number;
  local_active_cases : number;
  local_deaths : number;
  local_new_cases : number;
  local_new_deaths : number;
  local_recovered : number;
  local_total_cases : number;
  local_total_number_of_individuals_in_hospitals : number;
  total_pcr_testing_count : number;
  update_date_time : number;



  constructor(public covidService: Covid19DashboardService, private router : Router) { }

  ngOnInit(): void {
    this.covidService.getStatistics().subscribe(res => {
      console.log(res);
      
        this.global_deaths = res.data.global_deaths;
        this.global_new_cases = res.data.global_new_cases;
        this.global_new_deaths = res.data.global_new_deaths;
        this.global_recovered = res.data.global_recovered;
        this.global_total_cases = res.data.global_total_cases;
        this.local_active_cases = res.data.local_active_cases;
        this.local_deaths = res.data.local_deaths;
        this.local_new_cases = res.data.local_new_cases;
        this.local_new_deaths = res.data.local_new_deaths;
        this.local_recovered = res.data.local_recovered;
        this.local_total_cases = res.data.local_total_cases;
        this.local_total_number_of_individuals_in_hospitals = res.data.local_total_number_of_individuals_in_hospitals;
        this.total_pcr_testing_count = res.data.total_pcr_testing_count;
        this.update_date_time = res.data.update_date_time;


    })
  }

}
