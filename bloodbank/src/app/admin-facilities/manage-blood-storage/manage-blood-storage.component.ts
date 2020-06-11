import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

import { BloodInventory } from '../../shared/blood-inventory.model';
import { BloodInventoryService } from '../../shared/blood-inventory.service'

@Component({
  selector: 'app-manage-blood-storage',
  templateUrl: './manage-blood-storage.component.html',
  styleUrls: ['./manage-blood-storage.component.scss']
})
export class ManageBloodStorageComponent implements OnInit {

  showSucessMessage: boolean;

  constructor(public bloodinventoryService: BloodInventoryService, private router : Router) { }

  ngOnInit() {
    this.refreshBloodInventoryList();
  }

  refreshBloodInventoryList() {
    this.bloodinventoryService.getBloodStorage().subscribe((res) => {
      this.bloodinventoryService.blood_inventories = res as BloodInventory[];
    });
  }
  
  onEdit(bloodinventory: BloodInventory) {
    this.bloodinventoryService.selectedBloodInventory = bloodinventory;
    setTimeout(() => this.router.navigateByUrl('/update-blood-storage'));
  }

  onDelete(_id) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.bloodinventoryService.deleteBloodStorage(_id).subscribe((res) => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 2000);
        this.refreshBloodInventoryList();
      });
    }
  }
}
