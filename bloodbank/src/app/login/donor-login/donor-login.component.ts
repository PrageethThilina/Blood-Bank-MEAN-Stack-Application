import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { DonorService } from '../../shared/donor.service';

declare const pswrdvisible: any;

@Component({
  selector: 'app-donor-login',
  templateUrl: './donor-login.component.html',
  styleUrls: ['./donor-login.component.scss']
})
export class DonorLoginComponent implements OnInit {

  constructor(private donorService: DonorService, private router: Router) { }

  model = {

    donor_nic: '',
    password: '',

  };

  serverErrorMessages: string;

  ngOnInit() {
    if (this.donorService.isLoggedIn())
      this.router.navigateByUrl('/donor-facilities');
  }

  onSubmit(form: NgForm) {
    this.donorService.login(form.value).subscribe(
      res => {
        this.donorService.setToken(res['token']);
        this.router.navigateByUrl('/donor-facilities');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

  angpswrdVisible() {
    pswrdvisible();
  }

}
