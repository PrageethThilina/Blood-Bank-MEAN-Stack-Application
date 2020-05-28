import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

declare var M: any;

import { BloodInventory } from '../../shared/blood-inventory.model';
import { BloodInventoryService } from '../../shared/blood-inventory.service'

@Component({
  selector: 'app-view-blood-storage',
  templateUrl: './view-blood-storage.component.html',
  styleUrls: ['./view-blood-storage.component.scss']
})
export class ViewBloodStorageComponent implements OnInit {

  constructor(public bloodinventoryService: BloodInventoryService, private router : Router) { }

  ngOnInit() {
    this.refreshBloodInventoryList();
  }

  refreshBloodInventoryList() {
    this.bloodinventoryService.getBloodStorage().subscribe((res) => {
      this.bloodinventoryService.blood_inventories = res as BloodInventory[];
    });
  }

}
