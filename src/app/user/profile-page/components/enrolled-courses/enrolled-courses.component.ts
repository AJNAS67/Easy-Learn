import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { EnrolledCourseResponse } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.scss'],
})
export class EnrolledCoursesComponent implements OnInit, OnDestroy {
  enrolledCourse!: Array<EnrolledCourseResponse>;
  enrolledCourseSubscription$!: Subscription;
  constructor(private _userService: UserService, private _router: Router) {}

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
  courseDetails(_id: string) {
    this._router.navigate(['profile/course', _id]);
  }

  ngOnDestroy(): void {
    this.enrolledCourseSubscription$.unsubscribe();
  }
}
