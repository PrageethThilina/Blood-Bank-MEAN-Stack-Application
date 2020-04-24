import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBloodCampaignsComponent } from './view-blood-campaigns.component';

describe('ViewBloodCampaignsComponent', () => {
  let component: ViewBloodCampaignsComponent;
  let fixture: ComponentFixture<ViewBloodCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBloodCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBloodCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
