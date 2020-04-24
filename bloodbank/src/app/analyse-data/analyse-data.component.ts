import { Component, OnInit } from '@angular/core';
declare const analyseData: any;
declare const analyseData_Clear_Values: any;
declare const  analyseData_reload: any;


@Component({
  selector: 'app-analyse-data',
  templateUrl: './analyse-data.component.html',
  styleUrls: ['./analyse-data.component.scss']
})
export class AnalyseDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  analyseData()
  {
    analyseData();
  }
  analyseData_Clear_Values()
  {
    analyseData_Clear_Values();
  }
  analyseData_reload()
  {
    analyseData_reload();
  }

}
