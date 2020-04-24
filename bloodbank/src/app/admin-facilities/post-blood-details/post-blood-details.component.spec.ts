import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBloodDetailsComponent } from './post-blood-details.component';

describe('PostBloodDetailsComponent', () => {
  let component: PostBloodDetailsComponent;
  let fixture: ComponentFixture<PostBloodDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostBloodDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostBloodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
