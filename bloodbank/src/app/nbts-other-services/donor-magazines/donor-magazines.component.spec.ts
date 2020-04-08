import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorMagazinesComponent } from './donor-magazines.component';

describe('DonorMagazinesComponent', () => {
  let component: DonorMagazinesComponent;
  let fixture: ComponentFixture<DonorMagazinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorMagazinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorMagazinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
