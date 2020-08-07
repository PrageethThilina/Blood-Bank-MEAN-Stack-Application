import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';


@Component({
  selector: 'app-available-blood-storage-chart',
  templateUrl: './available-blood-storage-chart.component.html',
  styleUrls: ['./available-blood-storage-chart.component.scss']
})
export class AvailableBloodStorageChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'],
          datasets: [{
              label: 'Available Storage',
              data: [12, 19, 3, 5, 2, 3, 5, 2],
              backgroundColor: [
                  'red',
                  'Green',
                  'Yellow',
                  'Blue',
                  'Purple',
                  'Orange',
                  'Cyan',
                  'Grey'
              ],
              borderColor: [
                  'black',
                  'black',
                  'black', 
                  'black', 
                  'black', 
                  'black', 
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
  }

}
