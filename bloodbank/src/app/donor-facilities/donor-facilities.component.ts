import { Component, OnInit } from '@angular/core';
import { DonorService } from '../shared/donor.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-donor-facilities',
  templateUrl: './donor-facilities.component.html',
  styleUrls: ['./donor-facilities.component.scss']
})
export class DonorFacilitiesComponent {

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

  onLogout(){
    this.donorService.deleteToken();
    this.router.navigate(['/donor-login']);
  }

}
