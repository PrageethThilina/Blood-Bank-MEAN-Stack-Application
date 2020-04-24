import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredDoneeComponent } from './registered-donee.component';

describe('RegisteredDoneeComponent', () => {
  let component: RegisteredDoneeComponent;
  let fixture: ComponentFixture<RegisteredDoneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredDoneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredDoneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
