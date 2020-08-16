import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { Router } from "@angular/router";

@Component({
  selector: 'app-received-blood-storage-chart',
  templateUrl: './received-blood-storage-chart.component.html',
  styleUrls: ['./received-blood-storage-chart.component.scss']
})
export class ReceivedBloodStorageChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var myChart = new Chart("myChart2", {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September','October','November','December'],
          datasets: [{
              label: 'Received Storage',
              data: [50, 60, 70, 40, 10, 20, 90, 100, 30, 40, 10, 40],
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
