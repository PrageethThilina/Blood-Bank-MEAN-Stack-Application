import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcceptedAppointmentsComponent } from './admin-accepted-appointments.component';

describe('AdminAcceptedAppointmentsComponent', () => {
  let component: AdminAcceptedAppointmentsComponent;
  let fixture: ComponentFixture<AdminAcceptedAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAcceptedAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAcceptedAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
