import { Component, OnInit } from '@angular/core';
import { BloodCampaignsService } from '../../shared/blood-campaigns.service';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register-blood-campaign',
  templateUrl: './register-blood-campaign.component.html',
  styleUrls: ['./register-blood-campaign.component.scss']
})
export class RegisterBloodCampaignComponent implements OnInit {
  bloodcampform: FormGroup;
  imageFile: File = null;
  province = '';
  district = '';
  address = '';
  organiser = '';
  date = '';
  time = '';
  contact = '';
  email = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(
    private api: BloodCampaignsService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.bloodcampform = this.formBuilder.group({
      imageFile : [null, Validators.required],
      province : [null, Validators.required],
      district : [null, Validators.required],
      address : [null, Validators.required],
      organiser : [null, Validators.required],
      date : [null, Validators.required],
      time : [null, Validators.required],
      contact : [null, Validators.required],
      email : [null, Validators.required],
    });
  }

  onFormSubmit(): void {
    this.isLoadingResults = true;
    this.api.addPost(this.bloodcampform.value, this.bloodcampform.get('imageFile').value._files[0])
      .subscribe((res: any) => {
        this.isLoadingResults = false;
        if (res.body) {
          this.router.navigate(['/view-blood-campaigns']);
        }
      }, (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
