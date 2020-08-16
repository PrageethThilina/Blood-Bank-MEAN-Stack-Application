import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Chart } from 'node_modules/chart.js';

import { BloodInventory } from '../../../shared/blood-inventory.model';
import { BloodInventoryService } from '../../../shared/blood-inventory.service'


@Component({
  selector: 'app-a-negative-chart',
  templateUrl: './a-negative-chart.component.html',
  styleUrls: ['./a-negative-chart.component.scss']
})
export class ANegativeChartComponent implements OnInit {
    
    a_negative_count : number;

    constructor(public bloodinventoryService: BloodInventoryService, private router: Router) { }

  ngOnInit(): void {

    this.bloodinventoryService.get_A_Negative_BloodCount_Chart().subscribe(data => {
        this.a_negative_count = data;
  
   

    var myChart = new Chart("myChart5", {
      type: 'doughnut',
      data: {
          labels: ['Available amount', 'Out of Hundred'],
          datasets: [{
              label: 'Available A- Blood Storage',
              data: [this.a_negative_count,100],
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
