import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalBloodRequestTableComponent } from './hospital-blood-request-table.component';

describe('HospitalBloodRequestTableComponent', () => {
  let component: HospitalBloodRequestTableComponent;
  let fixture: ComponentFixture<HospitalBloodRequestTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalBloodRequestTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalBloodRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
