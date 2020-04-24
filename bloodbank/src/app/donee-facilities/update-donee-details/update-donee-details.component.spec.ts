import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDoneeDetailsComponent } from './update-donee-details.component';

describe('UpdateDoneeDetailsComponent', () => {
  let component: UpdateDoneeDetailsComponent;
  let fixture: ComponentFixture<UpdateDoneeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDoneeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDoneeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
