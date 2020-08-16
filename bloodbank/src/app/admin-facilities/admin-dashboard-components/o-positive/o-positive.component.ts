import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { BloodInventory } from '../../../shared/blood-inventory.model';
import { BloodInventoryService } from '../../../shared/blood-inventory.service'

@Component({
  selector: 'app-o-positive',
  templateUrl: './o-positive.component.html',
  styleUrls: ['./o-positive.component.scss']
})
export class OPositiveComponent implements OnInit {

        o_positive_count : number;
            
         constructor(public bloodinventoryService: BloodInventoryService, private router: Router) { }
            
          ngOnInit(): void {
            
                this.bloodinventoryService.get_O_Positive_BloodCount().subscribe(data => {
                  this.o_positive_count = data;
            
               });
          }
  

}
