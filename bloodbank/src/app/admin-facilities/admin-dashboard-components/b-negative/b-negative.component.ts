
  import { Component, OnInit } from '@angular/core';
  import { Router } from "@angular/router";
  
  import { BloodInventory } from '../../../shared/blood-inventory.model';
  import { BloodInventoryService } from '../../../shared/blood-inventory.service'

@Component({
  selector: 'app-b-negative',
  templateUrl: './b-negative.component.html',
  styleUrls: ['./b-negative.component.scss']
})
export class BNegativeComponent implements OnInit {

    b_negative_count : number;
        
     constructor(public bloodinventoryService: BloodInventoryService, private router: Router) { }
        
      ngOnInit(): void {
        
            this.bloodinventoryService.get_B_Negative_BloodCount().subscribe(data => {
              this.b_negative_count = data;
        
           });
      }

}
