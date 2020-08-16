import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { BloodInventory } from '../../../shared/blood-inventory.model';
import { BloodInventoryService } from '../../../shared/blood-inventory.service'

@Component({
  selector: 'app-b-positive',
  templateUrl: './b-positive.component.html',
  styleUrls: ['./b-positive.component.scss']
})
export class BPositiveComponent implements OnInit {


    b_positive_count : number;
        
     constructor(public bloodinventoryService: BloodInventoryService, private router: Router) { }
        
      ngOnInit(): void {
        
            this.bloodinventoryService.get_B_Positive_BloodCount().subscribe(data => {
              this.b_positive_count = data;
        
           });
      }

}
