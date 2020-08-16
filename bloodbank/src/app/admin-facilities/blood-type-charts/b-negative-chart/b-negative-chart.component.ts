import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Chart } from 'node_modules/chart.js';

import { BloodInventory } from '../../../shared/blood-inventory.model';
import { BloodInventoryService } from '../../../shared/blood-inventory.service'


@Component({
  selector: 'app-b-negative-chart',
  templateUrl: './b-negative-chart.component.html',
  styleUrls: ['./b-negative-chart.component.scss']
})
export class BNegativeChartComponent implements OnInit {

    b_negative_count : number;

    constructor(public bloodinventoryService: BloodInventoryService, private router: Router) { }

  ngOnInit(): void {

    this.bloodinventoryService.get_B_Negative_BloodCount_Chart().subscribe(data => {
        this.b_negative_count = data;
  
   

    var myChart = new Chart("myChart6", {
      type: 'doughnut',
      data: {
          labels: ['Available amount', 'Out of Hundred'],
          datasets: [{
              label: 'B-',
              data: [this.b_negative_count,100],
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
