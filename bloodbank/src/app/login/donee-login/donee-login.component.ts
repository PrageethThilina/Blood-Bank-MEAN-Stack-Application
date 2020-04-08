import { Component, OnInit } from '@angular/core';
declare const pswrdvisible: any;


@Component({
  selector: 'app-donee-login',
  templateUrl: './donee-login.component.html',
  styleUrls: ['./donee-login.component.scss']
})
export class DoneeLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  angpswrdVisible() {
    pswrdvisible();
  }
}
