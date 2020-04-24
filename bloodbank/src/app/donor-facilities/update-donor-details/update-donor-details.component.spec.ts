import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDonorDetailsComponent } from './update-donor-details.component';

describe('UpdateDonorDetailsComponent', () => {
  let component: UpdateDonorDetailsComponent;
  let fixture: ComponentFixture<UpdateDonorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDonorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDonorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
