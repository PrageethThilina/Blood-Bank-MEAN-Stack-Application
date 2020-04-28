import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
import * as AOS from 'aos';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit 
{

  constructor() { }

  ngOnInit(): void {

    AOS.init({
        duration: 1000,
    });

    var myChart = new Chart("myChart1", {
      type: 'doughnut',
      data: {
          datasets: [{
              label: '80% Percentage',
              data: [12,3],
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

  var myChart = new Chart("myChart2", {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '80% Percentage',
            data: [12,5],
            backgroundColor: [
                'green',
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

var myChart = new Chart("myChart3", {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '80% Percentage',
            data: [12,4],
            backgroundColor: [
                'yellow',
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

var myChart = new Chart("myChart4", {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '80% Percentage',
            data: [12,1],
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

var myChart = new Chart("myChart5", {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '80% Percentage',
            data: [12,6],
            backgroundColor: [
                'orange',
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

var myChart = new Chart("myChart6", {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '80% Percentage',
            data: [12,10],
            backgroundColor: [
                'green',
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

var myChart = new Chart("myChart7", {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '80% Percentage',
            data: [12,2],
            backgroundColor: [
                'green',
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

var myChart = new Chart("myChart8", {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '80% Percentage',
            data: [12,5],
            backgroundColor: [
                'orange',
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

  }
}

