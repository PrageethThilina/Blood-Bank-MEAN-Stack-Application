import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OPositiveChartComponent } from './o-positive-chart.component';

describe('OPositiveChartComponent', () => {
  let component: OPositiveChartComponent;
  let fixture: ComponentFixture<OPositiveChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OPositiveChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OPositiveChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
