import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBloodCampDetailsComponent } from './post-blood-camp-details.component';

describe('PostBloodCampDetailsComponent', () => {
  let component: PostBloodCampDetailsComponent;
  let fixture: ComponentFixture<PostBloodCampDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostBloodCampDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostBloodCampDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
