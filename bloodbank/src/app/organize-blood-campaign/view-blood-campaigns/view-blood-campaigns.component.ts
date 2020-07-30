import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BloodCampaignsService } from '../../shared/blood-campaigns.service';
import { BloodCampaigns } from '../../shared/blood-campaigns.model';
import { Router } from "@angular/router";


@Component({
  selector: 'app-view-blood-campaigns',
  templateUrl: './view-blood-campaigns.component.html',
  styleUrls: ['./view-blood-campaigns.component.scss']
})
export class ViewBloodCampaignsComponent implements OnInit {

  bloodcampaigns: BloodCampaigns = { _id: '', imageUrl: '', province: '', district: '',address: '', organiser: '',date: '', time: '',contact: '', email: '', created: null };
  isLoadingResults = true;

  constructor(  private route: ActivatedRoute,  public api: BloodCampaignsService ,private router : Router) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.api.getPosts().subscribe((res) => {
      this.api.bloodcampaigns = res as BloodCampaigns[];

      });
  }

}
