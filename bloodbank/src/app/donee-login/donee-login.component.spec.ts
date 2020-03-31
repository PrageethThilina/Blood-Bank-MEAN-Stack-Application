import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneeLoginComponent } from './donee-login.component';

describe('DoneeLoginComponent', () => {
  let component: DoneeLoginComponent;
  let fixture: ComponentFixture<DoneeLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneeLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
