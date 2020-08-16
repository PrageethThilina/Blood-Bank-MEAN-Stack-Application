import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Chart } from 'node_modules/chart.js';

import { BloodInventory } from '../../../shared/blood-inventory.model';
import { BloodInventoryService } from '../../../shared/blood-inventory.service'


@Component({
  selector: 'app-ab-negative-chart',
  templateUrl: './ab-negative-chart.component.html',
  styleUrls: ['./ab-negative-chart.component.scss']
})
export class AbNegativeChartComponent implements OnInit {

    ab_negative_count : number;

    constructor(public bloodinventoryService: BloodInventoryService, private router: Router) { }

  ngOnInit(): void {

    this.bloodinventoryService.get_AB_Negative_BloodCount_Chart().subscribe(data => {
        this.ab_negative_count = data;
  
   

    var myChart = new Chart("myChart7", {
      type: 'doughnut',
      data: {
          labels: ['Available amount', 'Out of Hundred'],
          datasets: [{
              label: 'AB-',
              data: [this.ab_negative_count,100],
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
