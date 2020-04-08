import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorFacilitiesComponent } from './donor-facilities.component';

describe('DonorFacilitiesComponent', () => {
  let component: DonorFacilitiesComponent;
  let fixture: ComponentFixture<DonorFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
