import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

import { BloodInventory } from '../../shared/blood-inventory.model';
import { BloodInventoryService } from '../../shared/blood-inventory.service'

@Component({
  selector: 'app-view-blood-storage',
  templateUrl: './view-blood-storage.component.html',
  styleUrls: ['./view-blood-storage.component.scss']
})
export class ViewBloodStorageComponent implements OnInit {

  constructor(public bloodinventoryService: BloodInventoryService, private router : Router) { }

  ngOnInit():void {

    this.refreshBloodInventoryList()

  }

  refreshBloodInventoryList() {
    this.bloodinventoryService.getBloodStorage().subscribe((res) => {
      this.bloodinventoryService.blood_inventories = res as BloodInventory[];
    });
  }

  onDownload(){

    const doc = new jsPDF()
    autoTable(doc, { html: '#my-table',
    body:[[{styles:{halign:'center'}}]],
    theme:'plain',
    headStyles:{ halign:'center',fontSize: 12,fontStyle: 'bold', fillColor:[221, 221, 221]},
    pageBreak:'avoid',
    showHead:'firstPage',
    margin: {top:10}
   })
    doc.save('Available_Blood_Storage.pdf')

  }

}
