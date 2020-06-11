import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { Donor } from '../../shared/donor.model';
import { DonorService } from '../../shared/donor.service'

@Component({
  selector: 'app-registered-donors',
  templateUrl: './registered-donors.component.html',
  styleUrls: ['./registered-donors.component.scss']
})
export class RegisteredDonorsComponent implements OnInit {

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
}

