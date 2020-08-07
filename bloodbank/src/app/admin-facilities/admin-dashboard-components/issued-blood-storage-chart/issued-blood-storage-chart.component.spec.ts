import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedBloodStorageChartComponent } from './issued-blood-storage-chart.component';

describe('IssuedBloodStorageChartComponent', () => {
  let component: IssuedBloodStorageChartComponent;
  let fixture: ComponentFixture<IssuedBloodStorageChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuedBloodStorageChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedBloodStorageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
