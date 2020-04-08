import { Component, OnInit } from '@angular/core';
declare const pswrdvisible: any;

@Component({
  selector: 'app-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  angpswrdVisible() {
    pswrdvisible();
  }

}

