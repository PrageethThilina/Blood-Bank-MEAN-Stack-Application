import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingBloodCampaignsComponent } from './pending-blood-campaigns.component';

describe('PendingBloodCampaignsComponent', () => {
  let component: PendingBloodCampaignsComponent;
  let fixture: ComponentFixture<PendingBloodCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingBloodCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingBloodCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
