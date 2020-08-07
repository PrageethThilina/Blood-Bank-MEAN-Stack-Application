import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneeRequestsCountComponent } from './donee-requests-count.component';

describe('DoneeRequestsCountComponent', () => {
  let component: DoneeRequestsCountComponent;
  let fixture: ComponentFixture<DoneeRequestsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneeRequestsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneeRequestsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
