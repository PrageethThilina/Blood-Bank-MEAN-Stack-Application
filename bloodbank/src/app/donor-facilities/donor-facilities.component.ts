import { Component, OnInit } from '@angular/core';
import { DonorService } from '../shared/donor.service';
import { Router } from "@angular/router";
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

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

      const doc = new jsPDF()
      autoTable(doc, { html: '#my-table',
      theme:'plain',
      headStyles:{halign:'center',fontSize: 20,fontStyle: 'bold', fillColor:[221, 221, 221]},
      columnStyles:{0: {fontSize: 10,fontStyle: 'bold'}},
      margin: {top:10}
     })
      doc.save('Donor_Profile.pdf')

  }

}
