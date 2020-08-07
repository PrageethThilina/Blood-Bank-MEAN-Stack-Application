import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsCountComponent } from './donors-count.component';

describe('DonorsCountComponent', () => {
  let component: DonorsCountComponent;
  let fixture: ComponentFixture<DonorsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
