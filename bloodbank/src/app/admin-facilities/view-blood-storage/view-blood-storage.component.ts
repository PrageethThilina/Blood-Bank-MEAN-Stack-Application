import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import * as html2pdf from 'html2pdf.js'


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

  onDownload(){
    const options = {
      name: 'output.pdf',
      image: { type: 'jpeg'},
      html2canvas: {},
      jspdf:{orientation: 'landscape'},
    }

    const element: Element = document.getElementById('available_blood_storage');

    html2pdf()
      .from(element)
      .set(options)
      .save('Available Blood Storage.pdf')
  }

}
