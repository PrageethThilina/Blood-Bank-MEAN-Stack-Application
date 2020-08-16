import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BPositiveChartComponent } from './b-positive-chart.component';

describe('BPositiveChartComponent', () => {
  let component: BPositiveChartComponent;
  let fixture: ComponentFixture<BPositiveChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BPositiveChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BPositiveChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
