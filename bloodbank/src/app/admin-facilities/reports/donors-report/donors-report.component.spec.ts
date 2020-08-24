import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsReportComponent } from './donors-report.component';

describe('DonorsReportComponent', () => {
  let component: DonorsReportComponent;
  let fixture: ComponentFixture<DonorsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
