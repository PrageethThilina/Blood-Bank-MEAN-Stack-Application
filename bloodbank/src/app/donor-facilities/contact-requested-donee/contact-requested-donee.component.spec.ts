import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRequestedDoneeComponent } from './contact-requested-donee.component';

describe('ContactRequestedDoneeComponent', () => {
  let component: ContactRequestedDoneeComponent;
  let fixture: ComponentFixture<ContactRequestedDoneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactRequestedDoneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRequestedDoneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
