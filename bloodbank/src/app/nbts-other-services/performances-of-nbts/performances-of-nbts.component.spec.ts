import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancesOfNbtsComponent } from './performances-of-nbts.component';

describe('PerformancesOfNbtsComponent', () => {
  let component: PerformancesOfNbtsComponent;
  let fixture: ComponentFixture<PerformancesOfNbtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformancesOfNbtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformancesOfNbtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
