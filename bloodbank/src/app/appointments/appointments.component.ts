import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

declare var M: any;

import { Donor } from '../shared/donor.model';
import { DonorService } from '../shared/donor.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  constructor(public donorService: DonorService, private router : Router) { }

  donorDetails;
  
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
    setTimeout(() => this.router.navigateByUrl('/book-appointments'));
  }
  

}
