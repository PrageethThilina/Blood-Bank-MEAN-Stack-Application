import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { Admin } from '../../shared/admin.model';
import { AdminService } from '../../shared/admin.service';

@Component({
  selector: 'app-admin-side-nav',
  templateUrl: './admin-side-nav.component.html',
  styleUrls: ['./admin-side-nav.component.scss']
})
export class AdminSideNavComponent implements OnInit {

  adminDetails; 

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.getUserProfile().subscribe(
      res => {
        this.adminDetails = res['admin'];
      },
      err => { 
        console.log(err);
        
      }
    );

  }

}

