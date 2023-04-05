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
export class CategoryComponent implements OnInit,OnDestroy {
  allCourse$!: Array<CourseResponse>;
  @Input() Courses: any;
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

  courses = [
    { course_name: 'Angular', toter: 'Ajnas', level: 'Intermediate', fee: 499 },

    {
      course_name: 'Javascript',
      toter: 'Farsin',
      level: 'Advanced',
      fee: 1499,
    },
    {
      course_name: 'Javascript',
      toter: 'Farsin',
      level: 'Advanced',
      fee: 1499,
    },
    {
      course_name: 'Javascript',
      toter: 'Farsin',
      level: 'Advanced',
      fee: 1499,
    },
    {
      course_name: 'Javascript',
      toter: 'Farsin',
      level: 'Advanced',
      fee: 1499,
    },
    {
      course_name: 'Javascript',
      toter: 'Farsin',
      level: 'Advanced',
      fee: 1499,
    },
    {
      course_name: 'Angular Advance',
      toter: 'Ajnas',
      level: 'Intermediate',
      fee: 499,
    },
    { course_name: 'Angular', toter: 'Ajnas', level: 'Intermediate', fee: 499 },
    {
      course_name: 'Javascript',
      toter: 'Farsin',
      level: 'Advanced',
      fee: 1499,
    },
    {
      course_name: 'Javascript',
      toter: 'Farsin',
      level: 'Advanced',
      fee: 1499,
    },
  ];
  courseDetails(_id: string) {
    this._router.navigate(['/course-details', _id]);
  }
  ngOnDestroy(): void {
    this.getCourseSubscription.unsubscribe()
  }
}
