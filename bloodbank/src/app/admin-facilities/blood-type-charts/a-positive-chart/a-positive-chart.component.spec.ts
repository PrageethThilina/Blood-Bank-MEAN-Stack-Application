import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APositiveChartComponent } from './a-positive-chart.component';

describe('APositiveChartComponent', () => {
  let component: APositiveChartComponent;
  let fixture: ComponentFixture<APositiveChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APositiveChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APositiveChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
