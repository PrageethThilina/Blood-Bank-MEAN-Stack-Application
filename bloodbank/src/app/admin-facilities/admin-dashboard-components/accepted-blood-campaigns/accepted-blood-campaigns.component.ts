import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { BloodCampaigns } from '../../../shared/blood-campaigns.model';
import { BloodCampaignsService } from '../../../shared/blood-campaigns.service'

@Component({
  selector: 'app-accepted-blood-campaigns',
  templateUrl: './accepted-blood-campaigns.component.html',
  styleUrls: ['./accepted-blood-campaigns.component.scss']
})
export class AcceptedBloodCampaignsComponent implements OnInit {

  accepted_blood_campaigns: number;
  
  constructor(public bloodcampaignService: BloodCampaignsService, private router: Router) { }
              
  ngOnInit(): void {
    
        this.bloodcampaignService.accepted_blood_campaigns().subscribe(data => {
          this.accepted_blood_campaigns = data;
    
       });
  }

}
