import { Component, OnInit } from '@angular/core';
import { AddCourseComponent } from '../add-course/add-course.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../service/user.service';
import { CourseResponse } from 'src/app/interface/user.interface';
@Component({
  selector: 'app-mentor-courses',
  templateUrl: './mentor-courses.component.html',
  styleUrls: ['./mentor-courses.component.scss'],
})
export class MentorCoursesComponent implements OnInit {
  mentorCourses$!:any ;
  constructor(
    private _matDialog: MatDialog,
    private _userService: UserService
  ) {}
  ngOnInit(): void {
    this._userService.getMentorCourse().subscribe((res:CourseResponse) => {
      this.mentorCourses$ = res;
    });
  }


  openDialog() {
    this._matDialog.open(AddCourseComponent, { minWidth: '50%' });
  }
  
  
}
