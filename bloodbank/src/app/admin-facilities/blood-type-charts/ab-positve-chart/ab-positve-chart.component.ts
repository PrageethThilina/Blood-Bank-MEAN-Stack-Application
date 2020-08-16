import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Chart } from 'node_modules/chart.js';

import { BloodInventory } from '../../../shared/blood-inventory.model';
import { BloodInventoryService } from '../../../shared/blood-inventory.service'


@Component({
  selector: 'app-ab-positve-chart',
  templateUrl: './ab-positve-chart.component.html',
  styleUrls: ['./ab-positve-chart.component.scss']
})
export class AbPositveChartComponent implements OnInit {

    ab_positive_count : number;

    constructor(public bloodinventoryService: BloodInventoryService, private router: Router) { }

  ngOnInit(): void {

    this.bloodinventoryService.get_AB_Positive_BloodCount_Chart().subscribe(data => {
        this.ab_positive_count = data;
  
   

    var myChart = new Chart("myChart3", {
      type: 'doughnut',
      data: {
          labels: ['Available amount', 'Out of Hundred'],
          datasets: [{
              label: 'AB+',
              data: [this.ab_positive_count,100],
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
