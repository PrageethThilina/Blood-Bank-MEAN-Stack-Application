import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalManageAppointmentsComponent } from './hospital-manage-appointments.component';

describe('HospitalManageAppointmentsComponent', () => {
  let component: HospitalManageAppointmentsComponent;
  let fixture: ComponentFixture<HospitalManageAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalManageAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalManageAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
