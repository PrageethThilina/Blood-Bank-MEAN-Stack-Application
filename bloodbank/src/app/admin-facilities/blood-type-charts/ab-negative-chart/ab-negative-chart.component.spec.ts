import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbNegativeChartComponent } from './ab-negative-chart.component';

describe('AbNegativeChartComponent', () => {
  let component: AbNegativeChartComponent;
  let fixture: ComponentFixture<AbNegativeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbNegativeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbNegativeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
