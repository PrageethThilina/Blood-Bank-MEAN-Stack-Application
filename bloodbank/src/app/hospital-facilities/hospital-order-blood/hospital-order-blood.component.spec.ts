import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalOrderBloodComponent } from './hospital-order-blood.component';

describe('HospitalOrderBloodComponent', () => {
  let component: HospitalOrderBloodComponent;
  let fixture: ComponentFixture<HospitalOrderBloodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalOrderBloodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalOrderBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
