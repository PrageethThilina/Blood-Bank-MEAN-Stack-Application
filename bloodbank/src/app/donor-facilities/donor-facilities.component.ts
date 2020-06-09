import { Component, OnInit } from '@angular/core';
import { DonorService } from '../shared/donor.service';
import { Router } from "@angular/router";
import * as html2pdf from 'html2pdf.js'

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

  onDownload(){
    const options = {
      name: 'output.pdf',
      image: { type: 'jpeg'},
      html2canvas: {},
      jspdf:{orientation: 'landscape'},
    }

    const element: Element = document.getElementById('donor_profile');

    html2pdf()
      .from(element)
      .set(options)
      .save('Donor_Profile.pdf')
  }

}
