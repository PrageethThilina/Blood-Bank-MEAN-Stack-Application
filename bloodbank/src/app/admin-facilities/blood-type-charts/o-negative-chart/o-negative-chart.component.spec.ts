import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ONegativeChartComponent } from './o-negative-chart.component';

describe('ONegativeChartComponent', () => {
  let component: ONegativeChartComponent;
  let fixture: ComponentFixture<ONegativeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ONegativeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ONegativeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
