import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalViewFinishedAppointmentsComponent } from './hospital-view-finished-appointments.component';

describe('HospitalViewFinishedAppointmentsComponent', () => {
  let component: HospitalViewFinishedAppointmentsComponent;
  let fixture: ComponentFixture<HospitalViewFinishedAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalViewFinishedAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalViewFinishedAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
