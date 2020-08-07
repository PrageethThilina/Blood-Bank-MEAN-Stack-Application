import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedBloodStorageChartComponent } from './received-blood-storage-chart.component';

describe('ReceivedBloodStorageChartComponent', () => {
  let component: ReceivedBloodStorageChartComponent;
  let fixture: ComponentFixture<ReceivedBloodStorageChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedBloodStorageChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedBloodStorageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
