import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { BloodInventory } from '../../../shared/blood-inventory.model';
import { BloodInventoryService } from '../../../shared/blood-inventory.service'

@Component({
  selector: 'app-o-negative',
  templateUrl: './o-negative.component.html',
  styleUrls: ['./o-negative.component.scss']
})
export class ONegativeComponent implements OnInit {


      o_negative_count : number;
          
       constructor(public bloodinventoryService: BloodInventoryService, private router: Router) { }
          
        ngOnInit(): void {
          
              this.bloodinventoryService.get_O_Negative_BloodCount().subscribe(data => {
                this.o_negative_count = data;
          
             });
        }

}
