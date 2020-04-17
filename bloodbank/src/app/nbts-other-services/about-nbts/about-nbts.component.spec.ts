import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNbtsComponent } from './about-nbts.component';

describe('AboutNbtsComponent', () => {
  let component: AboutNbtsComponent;
  let fixture: ComponentFixture<AboutNbtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutNbtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNbtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
