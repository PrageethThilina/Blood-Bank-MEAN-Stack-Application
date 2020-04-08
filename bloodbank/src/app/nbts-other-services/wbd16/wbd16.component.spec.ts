import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wbd16Component } from './wbd16.component';

describe('Wbd16Component', () => {
  let component: Wbd16Component;
  let fixture: ComponentFixture<Wbd16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wbd16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wbd16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
