import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { HospitalService } from '../../shared/hospital.service';

declare const pswrdvisible: any;


@Component({
  selector: 'app-hospital-login',
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.scss']
})
export class HospitalLoginComponent implements OnInit {

  constructor(private hospitalService: HospitalService,private router : Router) { }

  model = {

    hospital_username :'',
    password:'',
    
  };
  
  serverErrorMessages: string;

  ngOnInit() {
    if(this.hospitalService.isLoggedIn())
    this.router.navigateByUrl('/hospital-facilities');
  }

  onSubmit(form : NgForm){
    this.hospitalService.login(form.value).subscribe(
      res => {
        this.hospitalService.setToken(res['token']);
        this.router.navigateByUrl('/hospital-facilities');
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
