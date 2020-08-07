import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OPositiveComponent } from './o-positive.component';

describe('OPositiveComponent', () => {
  let component: OPositiveComponent;
  let fixture: ComponentFixture<OPositiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OPositiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OPositiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
