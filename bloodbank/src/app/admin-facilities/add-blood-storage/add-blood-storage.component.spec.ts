import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBloodStorageComponent } from './add-blood-storage.component';

describe('AddBloodStorageComponent', () => {
  let component: AddBloodStorageComponent;
  let fixture: ComponentFixture<AddBloodStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBloodStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBloodStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
