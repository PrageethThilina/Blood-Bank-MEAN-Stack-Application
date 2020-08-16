import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Chart } from 'node_modules/chart.js';

import { BloodInventory } from '../../../shared/blood-inventory.model';
import { BloodInventoryService } from '../../../shared/blood-inventory.service'


@Component({
  selector: 'app-b-positive-chart',
  templateUrl: './b-positive-chart.component.html',
  styleUrls: ['./b-positive-chart.component.scss']
})
export class BPositiveChartComponent implements OnInit {

    b_positive_count : number;

    constructor(public bloodinventoryService: BloodInventoryService, private router: Router) { }

  ngOnInit(): void {

    this.bloodinventoryService.get_B_Positive_BloodCount_Chart().subscribe(data => {
        this.b_positive_count = data;
  
   

    var myChart = new Chart("myChart2", {
      type: 'doughnut',
      data: {
          labels: ['Available amount', 'Out of Hundred'],
          datasets: [{
              label: 'B+',
              data: [this.b_positive_count,100],
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
