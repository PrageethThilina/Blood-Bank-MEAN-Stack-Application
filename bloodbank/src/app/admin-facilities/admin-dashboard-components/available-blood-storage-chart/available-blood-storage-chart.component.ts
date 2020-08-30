import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { BloodInventory } from '../../../shared/blood-inventory.model';
import { BloodInventoryService } from '../../../shared/blood-inventory.service'

import { Chart } from 'node_modules/chart.js';


@Component({
    selector: 'app-available-blood-storage-chart',
    templateUrl: './available-blood-storage-chart.component.html',
    styleUrls: ['./available-blood-storage-chart.component.scss']
})
export class AvailableBloodStorageChartComponent implements OnInit {

    a_positive_count: number;
    b_positive_count: number;
    ab_positive_count: number;
    o_positive_count: number;
    a_negative_count: number;
    b_negative_count: number;
    ab_negative_count: number;
    o_negative_count: number;


    constructor(public bloodinventoryService: BloodInventoryService, private router: Router) { }

    ngOnInit(): void {

        this.bloodinventoryService.get_A_Positive_BloodCount().subscribe(adata => {
            this.a_positive_count = adata;



            this.bloodinventoryService.get_B_Positive_BloodCount().subscribe(data => {
                this.b_positive_count = data;



                this.bloodinventoryService.get_AB_Positive_BloodCount().subscribe(data => {
                    this.ab_positive_count = data;



                    this.bloodinventoryService.get_O_Positive_BloodCount().subscribe(data => {
                        this.o_positive_count = data;



                        this.bloodinventoryService.get_A_Negative_BloodCount().subscribe(data => {
                            this.a_negative_count = data;



                            this.bloodinventoryService.get_B_Negative_BloodCount().subscribe(data => {
                                this.b_negative_count = data;



                                this.bloodinventoryService.get_AB_Negative_BloodCount().subscribe(data => {
                                    this.ab_negative_count = data;



                                    this.bloodinventoryService.get_O_Negative_BloodCount().subscribe(data => {
                                        this.o_negative_count = data;




                                        var myChart = new Chart("myChart", {
                                            type: 'bar',
                                            data: {
                                                labels: ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'],
                                                datasets: [{
                                                    label: 'Available Storage',
                                                    data: [
                                                        this.a_positive_count,
                                                        this.b_positive_count,
                                                        this.ab_positive_count,
                                                        this.o_positive_count,
                                                        this.a_negative_count,
                                                        this.b_negative_count,
                                                        this.ab_negative_count,
                                                        this.o_negative_count],
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
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }

}
