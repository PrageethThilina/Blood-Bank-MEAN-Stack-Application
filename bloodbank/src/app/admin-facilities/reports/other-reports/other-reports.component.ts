import { Component, OnInit } from '@angular/core';

declare const toggleSidebar : any;

@Component({
  selector: 'app-other-reports',
  templateUrl: './other-reports.component.html',
  styleUrls: ['./other-reports.component.scss']
})
export class OtherReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(){ 
    toggleSidebar();
  }

}
