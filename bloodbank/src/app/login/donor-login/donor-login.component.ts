import { Component, OnInit } from '@angular/core';
declare const pswrdvisible: any;

@Component({
  selector: 'app-donor-login',
  templateUrl: './donor-login.component.html',
  styleUrls: ['./donor-login.component.scss']
})
export class DonorLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  angpswrdVisible() {
    pswrdvisible();
  }
}
