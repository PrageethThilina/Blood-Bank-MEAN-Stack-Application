import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRegisteredDoneeComponent } from './manage-registered-donee.component';

describe('ManageRegisteredDoneeComponent', () => {
  let component: ManageRegisteredDoneeComponent;
  let fixture: ComponentFixture<ManageRegisteredDoneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRegisteredDoneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRegisteredDoneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
