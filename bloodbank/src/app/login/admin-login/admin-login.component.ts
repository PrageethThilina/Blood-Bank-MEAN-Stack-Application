import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AdminService } from '../../shared/admin.service';

declare const pswrdvisible: any;

@Component({
  selector: 'app-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private adminService: AdminService,private router : Router) { }

  model = {

    admin_username :'',
    password:'',
    
  };
  
  serverErrorMessages: string;

  ngOnInit() {
    if(this.adminService.isLoggedIn())
    this.router.navigateByUrl('/main-admin-dashboard');
  }

  onSubmit(form : NgForm){
    this.adminService.login(form.value).subscribe(
      res => {
        this.adminService.setToken(res['token']);
        this.router.navigateByUrl('/main-admin-dashboard');
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

