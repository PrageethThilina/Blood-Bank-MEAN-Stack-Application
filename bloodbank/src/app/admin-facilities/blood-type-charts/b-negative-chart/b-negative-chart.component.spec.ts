import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BNegativeChartComponent } from './b-negative-chart.component';

describe('BNegativeChartComponent', () => {
  let component: BNegativeChartComponent;
  let fixture: ComponentFixture<BNegativeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BNegativeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BNegativeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
