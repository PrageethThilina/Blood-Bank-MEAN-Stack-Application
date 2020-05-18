import { Component, OnInit } from '@angular/core';
import { DoneeService } from '../shared/donee.service';
import { Router } from "@angular/router";

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

}
