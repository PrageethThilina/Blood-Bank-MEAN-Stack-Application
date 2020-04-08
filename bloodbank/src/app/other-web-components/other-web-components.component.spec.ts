import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherWebComponentsComponent } from './other-web-components.component';

describe('OtherWebComponentsComponent', () => {
  let component: OtherWebComponentsComponent;
  let fixture: ComponentFixture<OtherWebComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherWebComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherWebComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
