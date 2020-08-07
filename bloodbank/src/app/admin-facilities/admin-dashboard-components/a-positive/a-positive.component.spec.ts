import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APositiveComponent } from './a-positive.component';

describe('APositiveComponent', () => {
  let component: APositiveComponent;
  let fixture: ComponentFixture<APositiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APositiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APositiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
