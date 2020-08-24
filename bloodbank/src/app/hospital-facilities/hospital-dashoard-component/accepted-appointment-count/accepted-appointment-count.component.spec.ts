import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedAppointmentCountComponent } from './accepted-appointment-count.component';

describe('AcceptedAppointmentCountComponent', () => {
  let component: AcceptedAppointmentCountComponent;
  let fixture: ComponentFixture<AcceptedAppointmentCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedAppointmentCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedAppointmentCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
