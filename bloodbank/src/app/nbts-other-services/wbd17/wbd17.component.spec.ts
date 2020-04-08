import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WBD17Component } from './wbd17.component';

describe('WBD17Component', () => {
  let component: WBD17Component;
  let fixture: ComponentFixture<WBD17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WBD17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WBD17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
