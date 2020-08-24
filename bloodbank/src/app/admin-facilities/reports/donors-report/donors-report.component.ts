import { Component, OnInit } from '@angular/core';

declare const toggleSidebar : any;

@Component({
  selector: 'app-donors-report',
  templateUrl: './donors-report.component.html',
  styleUrls: ['./donors-report.component.scss']
})
export class DonorsReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(){ 
    toggleSidebar();
  }

}
