import { ActivatedRoute } from '@angular/router';
import { BloodCampaignsService } from '../../shared/blood-campaigns.service';
import { BloodCampaigns } from '../../shared/blood-campaigns.model';
import { Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';

declare const toggleSidebar : any;

@Component({
  selector: 'app-manage-blood-campaigns',
  templateUrl: './manage-blood-campaigns.component.html',
  styleUrls: ['./manage-blood-campaigns.component.scss']
})
export class ManageBloodCampaignsComponent implements OnInit {

  showSucessMessage: boolean;
  posts: BloodCampaigns[] = [];
  isLoading = false;
  private postsSub: Subscription;

  constructor(public postsService: BloodCampaignsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.postsService.get_Posts_Admin();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: BloodCampaigns[]) => {
        this.isLoading = false;
        this.posts = posts;
      });
  }
  
  onDelete(_id) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.postsService.deletePost(_id).subscribe((res) => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 2000);
        this.postsService.get_Posts_Admin();
      });
    }
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  
toggleSidebar(){ 
  toggleSidebar();
}

}
