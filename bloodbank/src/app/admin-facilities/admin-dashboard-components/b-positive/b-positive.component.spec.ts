import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BPositiveComponent } from './b-positive.component';

describe('BPositiveComponent', () => {
  let component: BPositiveComponent;
  let fixture: ComponentFixture<BPositiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BPositiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BPositiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
