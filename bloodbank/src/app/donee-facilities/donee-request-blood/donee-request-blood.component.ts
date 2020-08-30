import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { DoneeService } from '../../shared/donee.service'
import { DoneeBloodRequest } from 'src/app/shared/donee-blood-request.model';
import { DoneeBloodRequestService } from '../../shared/donee-blood-request.service'

@Component({
  selector: 'app-donee-request-blood',
  templateUrl: './donee-request-blood.component.html',
  styleUrls: ['./donee-request-blood.component.scss']
})
export class DoneeRequestBloodComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;
  requestshowSucessMessage: boolean;
  requestserverErrorMessages: string;

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(public doneebloodrequestService: DoneeBloodRequestService, public doneeService: DoneeService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.doneebloodrequestService.postBloodRequest(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 2000);
        setTimeout(() => this.router.navigateByUrl('/view-blood-request'));
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong when adding.Please contact admin.';
      }
    );
  }


}
