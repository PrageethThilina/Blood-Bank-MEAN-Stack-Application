import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbPositveChartComponent } from './ab-positve-chart.component';

describe('AbPositveChartComponent', () => {
  let component: AbPositveChartComponent;
  let fixture: ComponentFixture<AbPositveChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbPositveChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbPositveChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
