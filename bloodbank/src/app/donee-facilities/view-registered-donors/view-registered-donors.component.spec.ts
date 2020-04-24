import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegisteredDonorsComponent } from './view-registered-donors.component';

describe('ViewRegisteredDonorsComponent', () => {
  let component: ViewRegisteredDonorsComponent;
  let fixture: ComponentFixture<ViewRegisteredDonorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRegisteredDonorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRegisteredDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
