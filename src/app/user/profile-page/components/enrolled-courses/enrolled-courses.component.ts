import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.scss'],
})
export class EnrolledCoursesComponent implements OnInit, OnDestroy {
  enrolledCourse!: any;
  enrolledCourseSubscription$!: Subscription;
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.enrolledCourseSubscription$ = this._userService
      .getEnrolledCourses()
      .subscribe((res) => {
        let ar = [];
        for (let i = 0; i < res.length; i++) {
          const order = res[i];
          for (let j = 0; j < order.course.length; j++) {
            ar.push(order.course[j]);
          }
        }
        this.enrolledCourse = ar;
      });
  }

  ngOnDestroy(): void {
    this.enrolledCourseSubscription$.unsubscribe();
  }
}
