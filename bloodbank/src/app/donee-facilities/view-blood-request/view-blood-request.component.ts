import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { Donee } from '../../shared/donee.model';
import { DoneeService } from '../../shared/donee.service';

import { DoneeBloodRequest } from 'src/app/shared/donee-blood-request.model';
import { DoneeBloodRequestService } from '../../shared/donee-blood-request.service'

@Component({
  selector: 'app-view-blood-request',
  templateUrl: './view-blood-request.component.html',
  styleUrls: ['./view-blood-request.component.scss']
})
export class ViewBloodRequestComponent implements OnInit {

  requestshowSucessMessage: boolean;
  requestserverErrorMessages: string;
  acceptMessage: boolean;
  show_container: boolean=true;
  doneeDetails;

  constructor(private doneeService: DoneeService,public doneebloodrequestService: DoneeBloodRequestService, private router : Router) { }

  ngOnInit() {

    this.doneeService.getUserProfile().subscribe(
      res => {
        this.doneeDetails = res['donee'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  getDoneeOrders(donee_id : string) {
    this.doneebloodrequestService.getDoneeOrders(donee_id).subscribe((res) => {
      this.doneebloodrequestService.doneebloodrequests = res as DoneeBloodRequest[];
    });
  }

  onCancel(_id) {
    if (confirm('Are you sure to Cancel the Request ?') == true) {
      this.doneebloodrequestService.donee_cancel_request(_id).subscribe((res) => {
        this.requestshowSucessMessage = true;
        setTimeout(() => this.requestshowSucessMessage = false, 3000);
      });
    }
    window.location.reload();
    this.show_container=true;

  }

  onSuccess( _id: string,
    date: string,
    email: string,
    blood_group: string,
    spouce: string,
    health: string,
    status: string,) {
    if (confirm('Are you sure to Save the changes ?') == true) {
      status = "Found";
      this.doneebloodrequestService.onSuccess(_id, status).subscribe((res) => {
        console.log(res);
        this.acceptMessage = true;
        setTimeout(() => this.acceptMessage = false, 3000);
      });

    }
    window.location.reload();
    this.show_container=true;

  }
  
  onUpdate(doneebloodrequest: DoneeBloodRequest) {
    this.doneebloodrequestService.selecteddoneebloodrequest = doneebloodrequest;
    setTimeout(() => this.router.navigateByUrl('/update-blood-request'));
    this.show_container=true;

  }
}
