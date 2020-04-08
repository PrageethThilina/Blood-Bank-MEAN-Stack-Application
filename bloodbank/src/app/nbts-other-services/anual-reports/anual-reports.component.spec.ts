import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnualReportsComponent } from './anual-reports.component';

describe('AnualReportsComponent', () => {
  let component: AnualReportsComponent;
  let fixture: ComponentFixture<AnualReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnualReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnualReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
