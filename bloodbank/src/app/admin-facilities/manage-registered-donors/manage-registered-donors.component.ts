import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { Donor } from '../../shared/donor.model';
import { DonorService } from '../../shared/donor.service'

declare const toggleSidebar : any;

@Component({
  selector: 'app-manage-registered-donors',
  templateUrl: './manage-registered-donors.component.html',
  styleUrls: ['./manage-registered-donors.component.scss']
})
export class ManageRegisteredDonorsComponent implements OnInit {

  showSucessMessage: boolean;

  constructor(public donorService: DonorService, private router : Router) { }

  ngOnInit() {
    this.getDonorList();
  }

  getDonorList() {
    this.donorService.getDonorList().subscribe((res) => {
      this.donorService.dnrs = res as Donor[];
    });
  }
  

  onCall(_id){

  }
  onEmail(_id){

  }

  onDelete(_id) {
    if (confirm('Are you sure want to delete this Donor ?') == true) {
      this.donorService.deleteDonor(_id).subscribe((res) => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 2000);
        this.getDonorList();
      });
    }
  }

  
toggleSidebar(){ 
  toggleSidebar();
}

}
