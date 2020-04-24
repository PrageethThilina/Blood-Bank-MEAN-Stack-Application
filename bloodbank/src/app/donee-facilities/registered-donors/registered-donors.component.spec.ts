import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredDonorsComponent } from './registered-donors.component';

describe('RegisteredDonorsComponent', () => {
  let component: RegisteredDonorsComponent;
  let fixture: ComponentFixture<RegisteredDonorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredDonorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
