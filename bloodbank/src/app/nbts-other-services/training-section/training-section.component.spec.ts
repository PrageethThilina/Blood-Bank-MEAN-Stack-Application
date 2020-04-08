import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSectionComponent } from './training-section.component';

describe('TrainingSectionComponent', () => {
  let component: TrainingSectionComponent;
  let fixture: ComponentFixture<TrainingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
