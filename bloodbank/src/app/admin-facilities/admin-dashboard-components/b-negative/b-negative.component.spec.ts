import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BNegativeComponent } from './b-negative.component';

describe('BNegativeComponent', () => {
  let component: BNegativeComponent;
  let fixture: ComponentFixture<BNegativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BNegativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BNegativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
