import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBloodRequestComponent } from './edit-blood-request.component';

describe('EditBloodRequestComponent', () => {
  let component: EditBloodRequestComponent;
  let fixture: ComponentFixture<EditBloodRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBloodRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBloodRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
