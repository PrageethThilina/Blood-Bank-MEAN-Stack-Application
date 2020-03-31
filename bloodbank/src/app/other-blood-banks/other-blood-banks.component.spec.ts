import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherBloodBanksComponent } from './other-blood-banks.component';

describe('OtherBloodBanksComponent', () => {
  let component: OtherBloodBanksComponent;
  let fixture: ComponentFixture<OtherBloodBanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherBloodBanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherBloodBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
