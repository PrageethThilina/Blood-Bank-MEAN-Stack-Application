import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorViewPreviousAppointmentComponent } from './donor-view-previous-appointment.component';

describe('DonorViewPreviousAppointmentComponent', () => {
  let component: DonorViewPreviousAppointmentComponent;
  let fixture: ComponentFixture<DonorViewPreviousAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorViewPreviousAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorViewPreviousAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
