import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBloodStorageComponent } from './update-blood-storage.component';

describe('UpdateBloodStorageComponent', () => {
  let component: UpdateBloodStorageComponent;
  let fixture: ComponentFixture<UpdateBloodStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBloodStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBloodStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
