import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbPositiveComponent } from './ab-positive.component';

describe('AbPositiveComponent', () => {
  let component: AbPositiveComponent;
  let fixture: ComponentFixture<AbPositiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbPositiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbPositiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
