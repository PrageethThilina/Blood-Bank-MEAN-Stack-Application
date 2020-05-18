import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/admin.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }
 
  onLogout(){
    this.adminService.deleteToken();
    this.router.navigate(['/admin-login']);
  }

}
