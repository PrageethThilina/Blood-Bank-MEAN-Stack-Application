import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../shared/hospital.service';
import { Router } from "@angular/router";
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-hospital-facilities',
  templateUrl: './hospital-facilities.component.html',
  styleUrls: ['./hospital-facilities.component.scss']
})
export class HospitalFacilitiesComponent implements OnInit {
  
  hospitalDetails;

  constructor(private hospitalService: HospitalService, private router: Router) { }

  ngOnInit(): void {
    this.hospitalService.getUserProfile().subscribe(
      res => {
        this.hospitalDetails = res['hospital'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
    this.hospitalService.deleteToken();
    this.router.navigate(['/hospital-login']);
  }

  onDownload(){

    const doc = new jsPDF()
    autoTable(doc, { html: '#my-table',
    theme:'plain',
    headStyles:{halign:'center',fontSize: 20,fontStyle: 'bold', fillColor:[221, 221, 221]},
    columnStyles:{0: {fontSize: 10,fontStyle: 'bold'}},
    margin: {top:10}
   })
    doc.save('Hospital_Profile.pdf')

}

}
