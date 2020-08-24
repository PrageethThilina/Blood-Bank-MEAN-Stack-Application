import { Component, OnInit } from '@angular/core';

declare const toggleSidebar : any;

@Component({
  selector: 'app-blood-inventory-report',
  templateUrl: './blood-inventory-report.component.html',
  styleUrls: ['./blood-inventory-report.component.scss']
})
export class BloodInventoryReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(){ 
    toggleSidebar();
  }

}
