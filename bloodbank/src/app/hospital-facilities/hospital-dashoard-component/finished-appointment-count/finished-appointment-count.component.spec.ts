import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedAppointmentCountComponent } from './finished-appointment-count.component';

describe('FinishedAppointmentCountComponent', () => {
  let component: FinishedAppointmentCountComponent;
  let fixture: ComponentFixture<FinishedAppointmentCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedAppointmentCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedAppointmentCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
