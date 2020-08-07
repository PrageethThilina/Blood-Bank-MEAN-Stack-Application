import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ANegativeComponent } from './a-negative.component';

describe('ANegativeComponent', () => {
  let component: ANegativeComponent;
  let fixture: ComponentFixture<ANegativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ANegativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ANegativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
