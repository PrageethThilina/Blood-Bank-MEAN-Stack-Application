import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ONegativeComponent } from './o-negative.component';

describe('ONegativeComponent', () => {
  let component: ONegativeComponent;
  let fixture: ComponentFixture<ONegativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ONegativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ONegativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
