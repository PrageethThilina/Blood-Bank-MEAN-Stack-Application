import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalViewPreviousBloodRequestsComponent } from './hospital-view-previous-blood-requests.component';

describe('HospitalViewPreviousBloodRequestsComponent', () => {
  let component: HospitalViewPreviousBloodRequestsComponent;
  let fixture: ComponentFixture<HospitalViewPreviousBloodRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalViewPreviousBloodRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalViewPreviousBloodRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
