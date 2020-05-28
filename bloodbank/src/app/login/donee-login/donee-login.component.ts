import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { DoneeService } from '../../shared/donee.service';

declare const pswrdvisible: any;


@Component({
  selector: 'app-donee-login',
  templateUrl: './donee-login.component.html',
  styleUrls: ['./donee-login.component.scss']
})
export class DoneeLoginComponent implements OnInit {

  constructor(private doneeService: DoneeService,private router : Router) { }

  model = {

    donee_nic :'',
    password:'',
    
  };
  
  serverErrorMessages: string;

  ngOnInit() {
    if(this.doneeService.isLoggedIn())
    this.router.navigateByUrl('/donee-facilities');
  }

  onSubmit(form : NgForm){
    this.doneeService.login(form.value).subscribe(
      res => {
        this.doneeService.setToken(res['token']);
        this.router.navigateByUrl('/donee-facilities');
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
