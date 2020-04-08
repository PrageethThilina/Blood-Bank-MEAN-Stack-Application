import { Component, OnInit } from '@angular/core';
declare const pswrdvisible: any;
declare const repswrdvisible: any;

@Component({
  selector: 'app-donor-register',
  templateUrl: './donor-register.component.html',
  styleUrls: ['./donor-register.component.scss']
})
export class DonorRegisterComponent implements OnInit {

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
