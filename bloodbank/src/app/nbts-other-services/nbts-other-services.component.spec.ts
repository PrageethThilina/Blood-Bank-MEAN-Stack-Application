import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbtsOtherServicesComponent } from './nbts-other-services.component';

describe('NbtsOtherServicesComponent', () => {
  let component: NbtsOtherServicesComponent;
  let fixture: ComponentFixture<NbtsOtherServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbtsOtherServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbtsOtherServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
