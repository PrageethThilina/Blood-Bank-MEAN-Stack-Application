import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalFinishAppointmentsComponentComponent } from './hospital-finish-appointments-component.component';

describe('HospitalFinishAppointmentsComponentComponent', () => {
  let component: HospitalFinishAppointmentsComponentComponent;
  let fixture: ComponentFixture<HospitalFinishAppointmentsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalFinishAppointmentsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalFinishAppointmentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
