import { Component, OnInit } from '@angular/core';
import { DonorService } from '../../shared/donor.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-donor-header',
  templateUrl: './donor-header.component.html',
  styleUrls: ['./donor-header.component.scss']
})
export class DonorHeaderComponent implements OnInit {

constructor(private donorService: DonorService, private router: Router) { }

  ngOnInit(): void {
  }
 
  onLogout(){
    this.donorService.deleteToken();
    this.router.navigate(['/donor-login']);
  }

}
