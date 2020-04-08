import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsOfReferenceComponent } from './terms-of-reference.component';

describe('TermsOfReferenceComponent', () => {
  let component: TermsOfReferenceComponent;
  let fixture: ComponentFixture<TermsOfReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsOfReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsOfReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
