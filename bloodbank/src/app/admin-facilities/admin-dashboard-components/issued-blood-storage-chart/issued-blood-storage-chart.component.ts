import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { Router } from "@angular/router";

@Component({
  selector: 'app-issued-blood-storage-chart',
  templateUrl: './issued-blood-storage-chart.component.html',
  styleUrls: ['./issued-blood-storage-chart.component.scss']
})
export class IssuedBloodStorageChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var myChart = new Chart("myChart3", {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September','October','November','December'],
          datasets: [{
              label: 'Issued Storage',
              data: [20, 60, 50, 40, 10, 30, 90, 100, 30, 10, 10, 90],
              backgroundColor: [
                  'red',
                  'Green',
                  'Yellow',
                  'Blue',
                  'Purple',
                  'Orange',
                  'Cyan',
                  'Grey',
                  'Brown',
                  'Black',
                  'green',
                  'yellow'
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
