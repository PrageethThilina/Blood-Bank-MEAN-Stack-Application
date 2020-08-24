import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedBloodRequestCountComponent } from './accepted-blood-request-count.component';

describe('AcceptedBloodRequestCountComponent', () => {
  let component: AcceptedBloodRequestCountComponent;
  let fixture: ComponentFixture<AcceptedBloodRequestCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedBloodRequestCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedBloodRequestCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
