import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { BloodInventory } from '../../../shared/blood-inventory.model';
import { BloodInventoryService } from '../../../shared/blood-inventory.service'

@Component({
  selector: 'app-a-positive',
  templateUrl: './a-positive.component.html',
  styleUrls: ['./a-positive.component.scss']
})
export class APositiveComponent implements OnInit {


      a_positive_count : number;
    
      constructor(public bloodinventoryService: BloodInventoryService, private router: Router) { }
    
      ngOnInit(): void {
    
        this.bloodinventoryService.get_A_Positive_BloodCount().subscribe(data => {
          this.a_positive_count = data;
    
       });
      }

}
