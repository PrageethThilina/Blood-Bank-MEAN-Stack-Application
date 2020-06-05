import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { Donor } from '../../shared/donor.model';
import { DonorService } from '../../shared/donor.service';

@Component({
  selector: 'app-donor-header',
  templateUrl: './donor-header.component.html',
  styleUrls: ['./donor-header.component.scss']
})
export class DonorHeaderComponent implements OnInit {

  donorDetails;

  constructor(private donorService: DonorService, private router: Router) { }

  ngOnInit(): void {
    this.donorService.getUserProfile().subscribe(
      res => {
        this.donorDetails = res['donor'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }
 
  onEdit(donor: Donor) {
    this.donorService.selectedUser = donor;
    setTimeout(() => this.router.navigateByUrl('/update-donor-details'));
  }

  onLogout(){
    this.donorService.deleteToken();
    this.router.navigate(['/donor-login']);
  }

}
