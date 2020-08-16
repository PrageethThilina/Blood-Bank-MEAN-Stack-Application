import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Chart } from 'node_modules/chart.js';

import { BloodInventory } from '../../../shared/blood-inventory.model';
import { BloodInventoryService } from '../../../shared/blood-inventory.service'


@Component({
  selector: 'app-o-negative-chart',
  templateUrl: './o-negative-chart.component.html',
  styleUrls: ['./o-negative-chart.component.scss']
})
export class ONegativeChartComponent implements OnInit {

    o_negative_count : number;

    constructor(public bloodinventoryService: BloodInventoryService, private router: Router) { }

  ngOnInit(): void {

    this.bloodinventoryService.get_O_Negative_BloodCount_Chart().subscribe(data => {
        this.o_negative_count = data;
  
   

    var myChart = new Chart("myChart8", {
      type: 'doughnut',
      data: {
           labels: ['Available amount', 'Out of Hundred'],
          datasets: [{
              label: 'O-',
              data: [this.o_negative_count,100],
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
