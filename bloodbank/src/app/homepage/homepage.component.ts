import { Chart } from 'node_modules/chart.js'
import { ActivatedRoute } from '@angular/router';
import { BloodCampaignsService } from '../shared/blood-campaigns.service';
import { BloodCampaigns } from '../shared/blood-campaigns.model';
import { Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import * as AOS from 'aos';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

    posts: BloodCampaigns[] = [];
    isLoading = false;
    private postsSub: Subscription;

  constructor(public postsService: BloodCampaignsService) { }

  ngOnInit(): void {

    this.isLoading = true;
    this.postsService.getPostsInhomepage();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: BloodCampaigns[]) => {
        this.isLoading = false;
        this.posts = posts;
    });

    AOS.init({
        duration: 2000,
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

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}

