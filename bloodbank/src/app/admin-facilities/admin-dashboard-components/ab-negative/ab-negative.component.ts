import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { BloodInventory } from '../../../shared/blood-inventory.model';
import { BloodInventoryService } from '../../../shared/blood-inventory.service'

@Component({
  selector: 'app-ab-negative',
  templateUrl: './ab-negative.component.html',
  styleUrls: ['./ab-negative.component.scss']
})
export class AbNegativeComponent implements OnInit {


        ab_negative_count : number;
      
        constructor(public bloodinventoryService: BloodInventoryService, private router: Router) { }
      
        ngOnInit(): void {
      
          this.bloodinventoryService.get_AB_Negative_BloodCount().subscribe(data => {
            this.ab_negative_count = data;
      
         });
        }

}
