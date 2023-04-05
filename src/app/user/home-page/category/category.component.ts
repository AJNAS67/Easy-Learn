import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePageService } from '../service/home-page.service';
import { CourseResponse } from 'src/app/interface/user.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit, OnDestroy {
  allCourse$!: Array<CourseResponse>;
  @Input() Courses: any;
  @Input() trendingCourses!: Array<CourseResponse>;
  @Input() featuredCourses!: Array<CourseResponse>;
  @Input() popularCourses!: Array<CourseResponse>;
  @Input() mL_aiCourses!: Array<CourseResponse>;
  filtersLoaded!: Promise<boolean>;
  getCourseSubscription!: Subscription;

  constructor(private _homeService: HomePageService, private _router: Router) {}

  ngOnInit(): void {
    this.getCourseSubscription = this._homeService
      .getAllCourse()
      .subscribe((res: Array<CourseResponse>) => {
        this.allCourse$ = res;
      });
  }

  courseDetails(_id: string) {
    this._router.navigate(['/course-details', _id]);
  }
  ngOnDestroy(): void {
    this.getCourseSubscription.unsubscribe();
  }
}
