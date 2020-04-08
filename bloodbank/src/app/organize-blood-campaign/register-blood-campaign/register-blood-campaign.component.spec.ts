import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBloodCampaignComponent } from './register-blood-campaign.component';

describe('RegisterBloodCampaignComponent', () => {
  let component: RegisterBloodCampaignComponent;
  let fixture: ComponentFixture<RegisterBloodCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBloodCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBloodCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
