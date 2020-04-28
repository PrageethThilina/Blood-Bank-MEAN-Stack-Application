import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRegisteredDonorsComponent } from './manage-registered-donors.component';

describe('ManageRegisteredDonorsComponent', () => {
  let component: ManageRegisteredDonorsComponent;
  let fixture: ComponentFixture<ManageRegisteredDonorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRegisteredDonorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRegisteredDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
