import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionsOfBloodComponent } from './functions-of-blood.component';

describe('FunctionsOfBloodComponent', () => {
  let component: FunctionsOfBloodComponent;
  let fixture: ComponentFixture<FunctionsOfBloodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionsOfBloodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionsOfBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
