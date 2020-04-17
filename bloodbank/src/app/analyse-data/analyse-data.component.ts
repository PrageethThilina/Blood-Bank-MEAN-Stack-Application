import { Component, OnInit } from '@angular/core';
declare const analyseData: any;

@Component({
  selector: 'app-analyse-data',
  templateUrl: './analyse-data.component.html',
  styleUrls: ['./analyse-data.component.scss']
})
export class AnalyseDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  analyseData(){
    analyseData();
  }

}
