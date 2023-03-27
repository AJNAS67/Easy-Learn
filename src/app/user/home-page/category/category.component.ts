import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  constructor(private router: Router) {}

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
  courseDetails() {
    this.router.navigate(['/course-details']);
  }
}
