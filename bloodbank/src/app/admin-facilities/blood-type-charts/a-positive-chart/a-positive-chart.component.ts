import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Chart } from 'node_modules/chart.js';

import { BloodInventory } from '../../../shared/blood-inventory.model';
import { BloodInventoryService } from '../../../shared/blood-inventory.service'


@Component({
  selector: 'app-a-positive-chart',
  templateUrl: './a-positive-chart.component.html',
  styleUrls: ['./a-positive-chart.component.scss']
})
export class APositiveChartComponent implements OnInit {

    a_positive_count : number;

    constructor(public bloodinventoryService: BloodInventoryService, private router: Router) { }

  ngOnInit(): void {

    this.bloodinventoryService.get_A_Positive_BloodCount_Chart().subscribe(data => {
        this.a_positive_count = data;
  
   

    var myChart = new Chart("myChart1", {
      type: 'doughnut',
      data: {
          labels: ['Available amount', 'Out of Hundred'],
          datasets: [{
              label: 'A+',
              data: [this.a_positive_count,100],
              backgroundColor: [
                  'red',
                  'white'
              ],
              borderColor: [
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

});
  }

 

}
