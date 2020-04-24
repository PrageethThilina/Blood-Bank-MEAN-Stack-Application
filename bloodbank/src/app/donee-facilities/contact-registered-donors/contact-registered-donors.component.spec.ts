import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRegisteredDonorsComponent } from './contact-registered-donors.component';

describe('ContactRegisteredDonorsComponent', () => {
  let component: ContactRegisteredDonorsComponent;
  let fixture: ComponentFixture<ContactRegisteredDonorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactRegisteredDonorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRegisteredDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
