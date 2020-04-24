import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBloodCampaignsComponent } from './manage-blood-campaigns.component';

describe('ManageBloodCampaignsComponent', () => {
  let component: ManageBloodCampaignsComponent;
  let fixture: ComponentFixture<ManageBloodCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBloodCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBloodCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
