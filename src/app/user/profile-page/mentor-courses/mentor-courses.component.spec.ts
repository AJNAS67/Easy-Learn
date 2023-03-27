import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorCoursesComponent } from './mentor-courses.component';

describe('MentorCoursesComponent', () => {
  let component: MentorCoursesComponent;
  let fixture: ComponentFixture<MentorCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
