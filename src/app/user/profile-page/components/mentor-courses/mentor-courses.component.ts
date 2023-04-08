import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddCourseComponent } from '../add-course/add-course.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../service/user.service';
import {
  CourseResponse,
  DeleteResponse,
} from 'src/app/interface/user.interface';
import { SnackBarService } from 'src/app/snack-bar/snack-bar.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-mentor-courses',
  templateUrl: './mentor-courses.component.html',
  styleUrls: ['./mentor-courses.component.scss'],
})
export class MentorCoursesComponent implements OnInit, OnDestroy {
  mentorCourses$!: Array<CourseResponse>;
  courseSubscription!: Subscription;
  constructor(
    private _matDialog: MatDialog,
    private _userService: UserService,
    private _snackBarService: SnackBarService
  ) {}
  ngOnInit(): void {
    this.getCourse();
    this._userService.RequiredRefresh.subscribe((r) => {
      this.getCourse();
    });
  }

  getCourse() {
    this.courseSubscription = this._userService
      .getMentorCourse()
      .subscribe((res: Array<CourseResponse>) => {
        this.mentorCourses$ = res;
      });
  }

  openDialog() {
    this._matDialog.open(AddCourseComponent, { minWidth: '50%' });
  }

  deleteCourse(courseId: string) {
    this._userService
      .deleteCourse(courseId)
      .subscribe((res: DeleteResponse) => {
        if (res.acknowledged) {
          this._snackBarService.popUpMessage('Course Deleted Successfully');
        } else {
          this._snackBarService.popUpMessage('oops  !! something is wrong');
        }
        this.getCourse();
      });
  }
  ngOnDestroy(): void {
    this.courseSubscription.unsubscribe();
  }
}
