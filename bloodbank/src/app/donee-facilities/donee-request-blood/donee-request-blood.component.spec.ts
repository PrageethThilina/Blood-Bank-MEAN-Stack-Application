import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneeRequestBloodComponent } from './donee-request-blood.component';

describe('DoneeRequestBloodComponent', () => {
  let component: DoneeRequestBloodComponent;
  let fixture: ComponentFixture<DoneeRequestBloodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneeRequestBloodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneeRequestBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
