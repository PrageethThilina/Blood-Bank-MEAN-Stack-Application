import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalBloodRequestCountComponent } from './hospital-blood-request-count.component';

describe('HospitalBloodRequestCountComponent', () => {
  let component: HospitalBloodRequestCountComponent;
  let fixture: ComponentFixture<HospitalBloodRequestCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalBloodRequestCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalBloodRequestCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
