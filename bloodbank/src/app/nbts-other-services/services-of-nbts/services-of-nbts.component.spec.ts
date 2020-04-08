import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesOfNbtsComponent } from './services-of-nbts.component';

describe('ServicesOfNbtsComponent', () => {
  let component: ServicesOfNbtsComponent;
  let fixture: ComponentFixture<ServicesOfNbtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesOfNbtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesOfNbtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
