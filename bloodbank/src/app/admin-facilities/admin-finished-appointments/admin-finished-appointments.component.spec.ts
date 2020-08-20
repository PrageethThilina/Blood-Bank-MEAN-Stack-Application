import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFinishedAppointmentsComponent } from './admin-finished-appointments.component';

describe('AdminFinishedAppointmentsComponent', () => {
  let component: AdminFinishedAppointmentsComponent;
  let fixture: ComponentFixture<AdminFinishedAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFinishedAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFinishedAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
