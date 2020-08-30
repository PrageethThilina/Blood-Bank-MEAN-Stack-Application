import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { BloodInventoryService } from '../../shared/blood-inventory.service'

@Component({
  selector: 'app-update-blood-storage',
  templateUrl: './update-blood-storage.component.html',
  styleUrls: ['./update-blood-storage.component.scss']
})
export class UpdateBloodStorageComponent implements OnInit {

  showupdateSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public bloodinventoryService: BloodInventoryService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.bloodinventoryService.putBloodStorage(form.value).subscribe((res) => {
      this.showupdateSucessMessage = true;
      setTimeout(() => this.showupdateSucessMessage = false, 3000);
      this.resetForm(form);
      setTimeout(() => this.router.navigateByUrl('/view-blood-storage'), 4000);
    });
  }

  resetForm(form: NgForm) {

    this.bloodinventoryService.selectedBloodInventory = {
      _id: '',
      blood_group: '',
      volume: '',
      received_date: '',
      expiry_date: '',
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
}
