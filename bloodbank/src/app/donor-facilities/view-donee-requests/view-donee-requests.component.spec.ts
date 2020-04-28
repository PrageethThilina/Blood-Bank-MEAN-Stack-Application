import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoneeRequestsComponent } from './view-donee-requests.component';

describe('ViewDoneeRequestsComponent', () => {
  let component: ViewDoneeRequestsComponent;
  let fixture: ComponentFixture<ViewDoneeRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDoneeRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDoneeRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
