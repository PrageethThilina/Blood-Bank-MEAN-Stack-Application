import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBloodStorageComponent } from './manage-blood-storage.component';

describe('ManageBloodStorageComponent', () => {
  let component: ManageBloodStorageComponent;
  let fixture: ComponentFixture<ManageBloodStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBloodStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBloodStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
