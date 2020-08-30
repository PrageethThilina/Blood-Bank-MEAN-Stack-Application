import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from "@angular/router";

import { BloodCampaignsService } from '../../shared/blood-campaigns.service';
import { BloodCampaigns } from '../../shared/blood-campaigns.model';
import { mimeType } from "./mime-type.validator";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register-blood-campaign',
  templateUrl: './register-blood-campaign.component.html',
  styleUrls: ['./register-blood-campaign.component.scss']
})
export class RegisterBloodCampaignComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  enteredTitle = "";
  enteredContent = "";
  post: BloodCampaigns;
  isLoading = false;
  form: FormGroup;
  imagePreview: string;
  private mode = "create";
  private postId: string;

  constructor(
    public postsService: BloodCampaignsService,
    public route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      province: new FormControl(null, { validators: [Validators.required] }),
      district: new FormControl(null, { validators: [Validators.required] }),
      address: new FormControl(null, { validators: [Validators.required] }),
      organiser: new FormControl(null, { validators: [Validators.required] }),
      date: new FormControl(null, { validators: [Validators.required] }),
      time: new FormControl(null, { validators: [Validators.required] }),
      contact: new FormControl(null, { validators: [Validators.required] }),
      email: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, { validators: [Validators.required], asyncValidators: [mimeType] })
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")) {
        this.mode = "edit";
        this.postId = paramMap.get("postId");
        this.isLoading = true;
        this.postsService.getPost(this.postId).subscribe(postData => {
          this.isLoading = false;
          this.post = {
            _id: postData._id,
            province: postData.province,
            district: postData.district,
            address: postData.address,
            organiser: postData.organiser,
            date: postData.date,
            time: postData.time,
            contact: postData.contact,
            email: postData.email,
            created: postData.created,
            status: postData.status,
            imagePath: postData.imagePath,
          };
          this.form.setValue({
            province: this.post.province,
            district: this.post.district,
            address: this.post.address,
            organiser: this.post.organiser,
            date: postData.date,
            time: this.post.time,
            contact: this.post.contact,
            email: this.post.email,
            created: this.post.created,
            image: this.post.imagePath
          });
        });
      } else {
        this.mode = "create";
        this.postId = null;
      }
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSavePost() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === "create") {
      this.postsService.addPost(
        this.form.value.province,
        this.form.value.district,
        this.form.value.address,
        this.form.value.organiser,
        this.form.value.date,
        this.form.value.time,
        this.form.value.contact,
        this.form.value.email,
        this.form.value.created,
        this.form.value.image
      )
      this.showSucessMessage = true;
      setTimeout(() => this.showSucessMessage = false, 3000);
      setTimeout(() => this.router.navigateByUrl('/view-blood-campaigns'), 3500);

    } else {
      this.postsService.updatePost(
        this.postId,
        this.form.value.province,
        this.form.value.district,
        this.form.value.address,
        this.form.value.organiser,
        this.form.value.date,
        this.form.value.time,
        this.form.value.contact,
        this.form.value.email,
        this.form.value.created,
        this.form.value.image
      );
    }
    this.form.reset();
  }

}
