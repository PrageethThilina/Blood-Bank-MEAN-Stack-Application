import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDonorsComponent } from './add-donors.component';

describe('AddDonorsComponent', () => {
  let component: AddDonorsComponent;
  let fixture: ComponentFixture<AddDonorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDonorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
