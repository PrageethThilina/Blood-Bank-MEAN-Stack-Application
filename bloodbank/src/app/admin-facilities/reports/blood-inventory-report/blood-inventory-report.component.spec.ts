import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodInventoryReportComponent } from './blood-inventory-report.component';

describe('BloodInventoryReportComponent', () => {
  let component: BloodInventoryReportComponent;
  let fixture: ComponentFixture<BloodInventoryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodInventoryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodInventoryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
