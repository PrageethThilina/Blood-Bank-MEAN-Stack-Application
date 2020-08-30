import { ActivatedRoute } from '@angular/router';
import { BloodCampaignsService } from '../shared/blood-campaigns.service';
import { BloodCampaigns } from '../shared/blood-campaigns.model';
import { Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import * as AOS from 'aos';

declare const getCurrentDate: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  posts: BloodCampaigns[] = [];
  isLoading = false;
  private postsSub: Subscription;

  constructor(public postsService: BloodCampaignsService) { }

  ngOnInit(): void {

    this.isLoading = true;
    this.postsService.getPostsInhomepage();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: BloodCampaigns[]) => {
        this.isLoading = false;
        this.posts = posts;
      });

    AOS.init({
      duration: 2000,
    });

    $(document).ready(function () {
      getCurrentDate();
    });

  }

  getCurrentDate() {
    getCurrentDate();
  }

}

