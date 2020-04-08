import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-blood-banks',
  templateUrl: './other-blood-banks.component.html',
  styleUrls: ['./other-blood-banks.component.scss']
})
export class OtherBloodBanksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  latitude = 6.8912222;
  longitude = 79.875202;
  zoom: number = 8;
}
