import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHopitalBloodOrdersComponent } from './manage-hopital-blood-orders.component';

describe('ManageHopitalBloodOrdersComponent', () => {
  let component: ManageHopitalBloodOrdersComponent;
  let fixture: ComponentFixture<ManageHopitalBloodOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageHopitalBloodOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageHopitalBloodOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
