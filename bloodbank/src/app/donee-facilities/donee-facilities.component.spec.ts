import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneeFacilitiesComponent } from './donee-facilities.component';

describe('DoneeFacilitiesComponent', () => {
  let component: DoneeFacilitiesComponent;
  let fixture: ComponentFixture<DoneeFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneeFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneeFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
