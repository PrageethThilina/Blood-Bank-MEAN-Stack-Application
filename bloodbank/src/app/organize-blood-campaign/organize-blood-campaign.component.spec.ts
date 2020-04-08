import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizeBloodCampaignComponent } from './organize-blood-campaign.component';

describe('OrganizeBloodCampaignComponent', () => {
  let component: OrganizeBloodCampaignComponent;
  let fixture: ComponentFixture<OrganizeBloodCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizeBloodCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizeBloodCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
