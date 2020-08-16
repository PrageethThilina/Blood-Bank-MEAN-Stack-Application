import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { BloodInventory } from '../../../shared/blood-inventory.model';
import { BloodInventoryService } from '../../../shared/blood-inventory.service'

@Component({
  selector: 'app-a-negative',
  templateUrl: './a-negative.component.html',
  styleUrls: ['./a-negative.component.scss']
})
export class ANegativeComponent implements OnInit {


    a_negative_count : number;
  
    constructor(public bloodinventoryService: BloodInventoryService, private router: Router) { }
  
    ngOnInit(): void {
  
      this.bloodinventoryService.get_A_Negative_BloodCount().subscribe(data => {
        this.a_negative_count = data;
  
     });
    }

}
