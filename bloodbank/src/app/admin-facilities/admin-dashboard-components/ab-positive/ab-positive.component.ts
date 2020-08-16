import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { BloodInventory } from '../../../shared/blood-inventory.model';
import { BloodInventoryService } from '../../../shared/blood-inventory.service'

@Component({
  selector: 'app-ab-positive',
  templateUrl: './ab-positive.component.html',
  styleUrls: ['./ab-positive.component.scss']
})
export class AbPositiveComponent implements OnInit {


  
  ab_positive_count : number;
      
   constructor(public bloodinventoryService: BloodInventoryService, private router: Router) { }
      
    ngOnInit(): void {
      
          this.bloodinventoryService.get_AB_Positive_BloodCount().subscribe(data => {
            this.ab_positive_count = data;
      
         });
    }
  

}
