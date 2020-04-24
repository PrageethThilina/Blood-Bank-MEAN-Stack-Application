import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRegisteredDoneeComponent } from './contact-registered-donee.component';

describe('ContactRegisteredDoneeComponent', () => {
  let component: ContactRegisteredDoneeComponent;
  let fixture: ComponentFixture<ContactRegisteredDoneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactRegisteredDoneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRegisteredDoneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
