import { Component, OnInit } from '@angular/core';
declare const pswrdvisible: any;
declare const repswrdvisible: any;


@Component({
  selector: 'app-donee-register',
  templateUrl: './donee-register.component.html',
  styleUrls: ['./donee-register.component.scss']
})
export class DoneeRegisterComponent implements OnInit {

  passwordType: string = 'password';
  passwordShown: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  angpswrdVisible(){
    pswrdvisible();
  }

  angrepswrdVisible(){
    repswrdvisible();
  }

}

