import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcceptDeleteAppointmentsComponent } from './admin-accept-delete-appointments.component';

describe('AdminAcceptDeleteAppointmentsComponent', () => {
  let component: AdminAcceptDeleteAppointmentsComponent;
  let fixture: ComponentFixture<AdminAcceptDeleteAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAcceptDeleteAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAcceptDeleteAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
