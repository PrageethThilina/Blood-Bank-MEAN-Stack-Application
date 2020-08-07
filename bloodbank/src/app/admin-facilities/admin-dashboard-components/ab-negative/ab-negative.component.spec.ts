import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbNegativeComponent } from './ab-negative.component';

describe('AbNegativeComponent', () => {
  let component: AbNegativeComponent;
  let fixture: ComponentFixture<AbNegativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbNegativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbNegativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
