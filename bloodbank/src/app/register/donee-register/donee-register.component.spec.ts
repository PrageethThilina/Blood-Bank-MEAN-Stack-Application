import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneeRegisterComponent } from './donee-register.component';

describe('DoneeRegisterComponent', () => {
  let component: DoneeRegisterComponent;
  let fixture: ComponentFixture<DoneeRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneeRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
