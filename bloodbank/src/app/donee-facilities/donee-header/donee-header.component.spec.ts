import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneeHeaderComponent } from './donee-header.component';

describe('DoneeHeaderComponent', () => {
  let component: DoneeHeaderComponent;
  let fixture: ComponentFixture<DoneeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
