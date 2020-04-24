import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBloodStorageComponent } from './view-blood-storage.component';

describe('ViewBloodStorageComponent', () => {
  let component: ViewBloodStorageComponent;
  let fixture: ComponentFixture<ViewBloodStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBloodStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBloodStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
