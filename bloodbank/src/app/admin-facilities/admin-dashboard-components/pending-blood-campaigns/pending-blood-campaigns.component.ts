import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { BloodCampaigns } from '../../../shared/blood-campaigns.model';
import { BloodCampaignsService } from '../../../shared/blood-campaigns.service'

@Component({
  selector: 'app-pending-blood-campaigns',
  templateUrl: './pending-blood-campaigns.component.html',
  styleUrls: ['./pending-blood-campaigns.component.scss']
})
export class PendingBloodCampaignsComponent implements OnInit {


  pending_blood_campaigns: number;

  constructor(public bloodcampaignService: BloodCampaignsService, private router: Router) { }

  ngOnInit(): void {

    this.bloodcampaignService.pending_blood_campaigns().subscribe(data => {
      this.pending_blood_campaigns = data;

    });
  }

}
