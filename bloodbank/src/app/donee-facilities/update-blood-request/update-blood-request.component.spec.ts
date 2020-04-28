import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBloodRequestComponent } from './update-blood-request.component';

describe('UpdateBloodRequestComponent', () => {
  let component: UpdateBloodRequestComponent;
  let fixture: ComponentFixture<UpdateBloodRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBloodRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBloodRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
