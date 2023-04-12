import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-student-chat',
  templateUrl: './student-chat.component.html',
  styleUrls: ['./student-chat.component.scss'],
})
export class StudentChatComponent implements OnInit, OnDestroy {
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
        console.log(this.enrolledCourse, 'enrolled coprse');
      });
  }
  ngOnDestroy(): void {
    this.enrolledCourseSubscription$.unsubscribe();
  }
}
