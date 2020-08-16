import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Chart } from 'node_modules/chart.js';

import { BloodInventory } from '../../../shared/blood-inventory.model';
import { BloodInventoryService } from '../../../shared/blood-inventory.service'


@Component({
  selector: 'app-o-positive-chart',
  templateUrl: './o-positive-chart.component.html',
  styleUrls: ['./o-positive-chart.component.scss']
})
export class OPositiveChartComponent implements OnInit {
    o_positive_count : number;

    constructor(public bloodinventoryService: BloodInventoryService, private router: Router) { }

  ngOnInit(): void {

    this.bloodinventoryService.get_A_Negative_BloodCount_Chart().subscribe(data => {
        this.o_positive_count = data;
  
   

    var myChart = new Chart("myChart4", {
      type: 'doughnut',
      data: {
          labels: ['Available amount', 'Out of Hundred'],
          datasets: [{
            label: 'O+',
            data: [this.o_positive_count,100],
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
