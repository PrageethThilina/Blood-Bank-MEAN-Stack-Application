import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAppointmentCountComponent } from './pending-appointment-count.component';

describe('PendingAppointmentCountComponent', () => {
  let component: PendingAppointmentCountComponent;
  let fixture: ComponentFixture<PendingAppointmentCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingAppointmentCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingAppointmentCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
