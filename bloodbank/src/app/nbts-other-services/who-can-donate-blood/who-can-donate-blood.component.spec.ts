import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoCanDonateBloodComponent } from './who-can-donate-blood.component';

describe('WhoCanDonateBloodComponent', () => {
  let component: WhoCanDonateBloodComponent;
  let fixture: ComponentFixture<WhoCanDonateBloodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoCanDonateBloodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoCanDonateBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
