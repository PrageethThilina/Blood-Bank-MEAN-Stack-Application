import { Component, OnInit } from '@angular/core';
import { DoneeService } from '../../shared/donee.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-donee-header',
  templateUrl: './donee-header.component.html',
  styleUrls: ['./donee-header.component.scss']
})
export class DoneeHeaderComponent implements OnInit {

  constructor(private doneeService: DoneeService, private router: Router) { }

  ngOnInit(): void {
  }
 
  onLogout(){
    this.doneeService.deleteToken();
    this.router.navigate(['/donee-login']);
  }

}
