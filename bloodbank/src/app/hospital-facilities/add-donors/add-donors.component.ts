import { Component, OnInit } from '@angular/core';
declare const pswrdvisible: any;
declare const repswrdvisible: any;

@Component({
  selector: 'app-add-donors',
  templateUrl: './add-donors.component.html',
  styleUrls: ['./add-donors.component.scss']
})
export class AddDonorsComponent implements OnInit {

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
