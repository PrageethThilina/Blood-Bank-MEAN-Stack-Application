import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableBloodStorageChartComponent } from './available-blood-storage-chart.component';

describe('AvailableBloodStorageChartComponent', () => {
  let component: AvailableBloodStorageChartComponent;
  let fixture: ComponentFixture<AvailableBloodStorageChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableBloodStorageChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableBloodStorageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
