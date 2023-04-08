import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCourseFoundComponent } from './no-course-found.component';

describe('NoCourseFoundComponent', () => {
  let component: NoCourseFoundComponent;
  let fixture: ComponentFixture<NoCourseFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoCourseFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoCourseFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
