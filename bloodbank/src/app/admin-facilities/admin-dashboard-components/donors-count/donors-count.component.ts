import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Donor } from '../../../shared/donor.model';
import { DonorService } from '../../../shared/donor.service'

@Component({
  selector: 'app-donors-count',
  templateUrl: './donors-count.component.html',
  styleUrls: ['./donors-count.component.scss']
})
export class DonorsCountComponent implements OnInit {
  
      donors_count : number;
          
       constructor(public donorService: DonorService, private router: Router) { }
          
        ngOnInit(): void {
          
              this.donorService.Donors_Count().subscribe(data => {
                this.donors_count = data;
          
             });
        }

}
