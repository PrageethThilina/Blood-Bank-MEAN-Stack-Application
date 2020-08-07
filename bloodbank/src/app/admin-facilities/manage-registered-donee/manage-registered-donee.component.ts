import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { Donee } from '../../shared/donee.model';
import { DoneeService } from '../../shared/donee.service'


declare const toggleSidebar : any;

@Component({
  selector: 'app-manage-registered-donee',
  templateUrl: './manage-registered-donee.component.html',
  styleUrls: ['./manage-registered-donee.component.scss']
})
export class ManageRegisteredDoneeComponent implements OnInit {

  showSucessMessage: boolean;

  constructor(public doneeService: DoneeService, private router : Router) { }

  ngOnInit() {
    this.getDoneeList();
  }

  getDoneeList() {
    this.doneeService.getDoneeList().subscribe((res) => {
      this.doneeService.dne = res as Donee[];
    });
  }

 onDelete(_id) {
    if (confirm('Are you sure want to delete this Donee ?') == true) {
      this.doneeService.deleteDonee(_id).subscribe((res) => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 2000);
        this.getDoneeList();
      });
    }
  }

  toggleSidebar(){ 
    toggleSidebar();
}

}
