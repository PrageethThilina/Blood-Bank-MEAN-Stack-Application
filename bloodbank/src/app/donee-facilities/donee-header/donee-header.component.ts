import { Component, OnInit } from '@angular/core';
import { DoneeService } from '../../shared/donee.service';
import { Router } from "@angular/router";
import { Donee } from '../../shared/donee.model';



@Component({
  selector: 'app-donee-header',
  templateUrl: './donee-header.component.html',
  styleUrls: ['./donee-header.component.scss']
})
export class DoneeHeaderComponent implements OnInit {

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
