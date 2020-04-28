import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalHeaderComponent } from './hospital-header.component';

describe('HospitalHeaderComponent', () => {
  let component: HospitalHeaderComponent;
  let fixture: ComponentFixture<HospitalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
