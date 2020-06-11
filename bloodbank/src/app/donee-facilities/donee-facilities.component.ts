import { Component, OnInit } from '@angular/core';
import { DoneeService } from '../shared/donee.service';
import { Router } from "@angular/router";
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-donee-facilities',
  templateUrl: './donee-facilities.component.html',
  styleUrls: ['./donee-facilities.component.scss']
})
export class DoneeFacilitiesComponent implements OnInit {

  doneeDetails;

  constructor(private doneeService: DoneeService, private router: Router) { }

  ngOnInit(): void {
    this.doneeService.getUserProfile().subscribe(
      res => {
        this.doneeDetails = res['donee'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
    this.doneeService.deleteToken();
    this.router.navigate(['/donee-login']);
  }

  onDownload(){

    const doc = new jsPDF()
    autoTable(doc, { html: '#my-table',
    theme:'plain',
    headStyles:{halign:'center',fontSize: 20,fontStyle: 'bold', fillColor:[221, 221, 221]},
    columnStyles:{0: {fontSize: 10,fontStyle: 'bold'}},
    margin: {top:10}
   })
    doc.save('Donee_Profile.pdf')

}

}
