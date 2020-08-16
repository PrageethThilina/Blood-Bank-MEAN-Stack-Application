import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ANegativeChartComponent } from './a-negative-chart.component';

describe('ANegativeChartComponent', () => {
  let component: ANegativeChartComponent;
  let fixture: ComponentFixture<ANegativeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ANegativeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ANegativeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
