import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { Location } from '@angular/common';

import { BloodInventoryService } from '../../shared/blood-inventory.service'

declare const toggleSidebar : any;

@Component({
  selector: 'app-add-blood-storage',
  templateUrl: './add-blood-storage.component.html',
  styleUrls: ['./add-blood-storage.component.scss']
})
export class AddBloodStorageComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public bloodinventoryService: BloodInventoryService, private router : Router, private location: Location) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.bloodinventoryService.postBloodStorage(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 2000);
        this.resetForm(form);
        setTimeout(() => this.router.navigateByUrl('/view-blood-storage'), 2500);
        setTimeout(() => location.reload(), 4000);      },
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

  resetForm(form: NgForm) {

    this.bloodinventoryService.selectedBloodInventory = {
      _id : '',
      blood_group : '',
      volume : '',
      received_date : '',
      expiry_date : '',
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

  toggleSidebar(){ 
    toggleSidebar();
}

}
