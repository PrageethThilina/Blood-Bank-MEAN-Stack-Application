import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { DoneeBloodRequest } from 'src/app/shared/donee-blood-request.model';
import { DoneeBloodRequestService } from '../../shared/donee-blood-request.service'
import { DoneeService } from '../../shared/donee.service'

@Component({
  selector: 'app-view-donee-requests',
  templateUrl: './view-donee-requests.component.html',
  styleUrls: ['./view-donee-requests.component.scss']
})
export class ViewDoneeRequestsComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public doneebloodrequestService: DoneeBloodRequestService, private router: Router) { }

  ngOnInit() {

    this.getAllDoneeOrders();
  }


  getAllDoneeOrders() {
    this.doneebloodrequestService.getAllDoneeOrders().subscribe((res) => {
      this.doneebloodrequestService.doneebloodrequests = res as DoneeBloodRequest[];
    });
  }

  onCall(_id) {

  }
}
