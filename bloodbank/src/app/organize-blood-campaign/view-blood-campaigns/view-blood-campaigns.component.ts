import { ActivatedRoute } from '@angular/router';
import { BloodCampaignsService } from '../../shared/blood-campaigns.service';
import { BloodCampaigns } from '../../shared/blood-campaigns.model';
import { Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-view-blood-campaigns',
  templateUrl: './view-blood-campaigns.component.html',
  styleUrls: ['./view-blood-campaigns.component.scss']
})
export class ViewBloodCampaignsComponent implements OnInit {

  posts: BloodCampaigns[] = [];
  isLoading = false;
  private postsSub: Subscription;

  constructor(public postsService: BloodCampaignsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: BloodCampaigns[]) => {
        this.isLoading = false;
        this.posts = posts;
      });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
