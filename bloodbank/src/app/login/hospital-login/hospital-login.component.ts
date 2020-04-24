import { Component, OnInit } from '@angular/core';
declare const pswrdvisible: any;


@Component({
  selector: 'app-hospital-login',
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.scss']
})
export class HospitalLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  angpswrdVisible() {
    pswrdvisible();
  }
}
