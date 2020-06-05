import { Component, OnInit } from '@angular/core';
declare const analyseData: any;
declare const analyseData_Clear_Values: any;
declare const  analyseData_reload: any;
declare const  validate_glucose_Data: any;
declare const  validate_cholestorol_Data: any;
declare const  validate_s_pressure_Data: any;
declare const  validate_d_pressure_Data: any;


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
  validate_glucose_Data()
  {
    validate_glucose_Data();
  }
  validate_cholestorol_Data()
  {
    validate_cholestorol_Data();
  }
  validate_s_pressure_Data()
  {
    validate_s_pressure_Data();
  }
  validate_d_pressure_Data()
  {
    validate_d_pressure_Data();
  }

}
