import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingBloodRequestCountComponent } from './pending-blood-request-count.component';

describe('PendingBloodRequestCountComponent', () => {
  let component: PendingBloodRequestCountComponent;
  let fixture: ComponentFixture<PendingBloodRequestCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingBloodRequestCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingBloodRequestCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
