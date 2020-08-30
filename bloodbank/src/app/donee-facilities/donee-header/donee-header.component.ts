import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { Donee } from '../../shared/donee.model';
import { DoneeService } from '../../shared/donee.service';

import { DoneeBloodRequest } from 'src/app/shared/donee-blood-request.model';
import { DoneeBloodRequestService } from '../../shared/donee-blood-request.service'

@Component({
  selector: 'app-donee-header',
  templateUrl: './donee-header.component.html',
  styleUrls: ['./donee-header.component.scss']
})
export class DoneeHeaderComponent implements OnInit {

  doneeDetails;

  constructor(public doneebloodrequestService: DoneeBloodRequestService, private doneeService: DoneeService, private router: Router) { }

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

  onEdit(donee: Donee) {
    this.doneeService.selectedUser = donee;
    setTimeout(() => this.router.navigateByUrl('/update-donee-details'));
  }

  onRequest(donee: Donee) {
    this.doneeService.selectedUser = donee;
    setTimeout(() => this.router.navigateByUrl('/donee-request-blood'));
  }


  onLogout() {
    this.doneeService.deleteToken();
    this.router.navigate(['/donee-login']);
  }

  getDoneeOrders(donee_id: string) {
    setTimeout(() => this.router.navigateByUrl('/view-blood-request'));
    this.doneebloodrequestService.getDoneeOrders(donee_id).subscribe((res) => {
      this.doneebloodrequestService.doneebloodrequests = res as DoneeBloodRequest[];
    });
  }

}
