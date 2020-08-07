import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedBloodCampaignsComponent } from './accepted-blood-campaigns.component';

describe('AcceptedBloodCampaignsComponent', () => {
  let component: AcceptedBloodCampaignsComponent;
  let fixture: ComponentFixture<AcceptedBloodCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedBloodCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedBloodCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
