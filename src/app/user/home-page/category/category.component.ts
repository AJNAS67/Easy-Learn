import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePageService } from '../service/home-page.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  allCourse$: any;
  @Input() Courses: any;
  filtersLoaded!: Promise<boolean>;

  constructor(private _homeService: HomePageService, private _router: Router) {}
  ngOnInit(): void {
    this._homeService.getAllCourse().subscribe((res) => {
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
  courseDetails(_id:any) {
    this._router.navigate(['/course-details',_id]);
  }
}
