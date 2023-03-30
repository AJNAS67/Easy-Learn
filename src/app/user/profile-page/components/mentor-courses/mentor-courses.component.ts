import { Component } from '@angular/core';
import { AddCourseComponent } from '../add-course/add-course.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-mentor-courses',
  templateUrl: './mentor-courses.component.html',
  styleUrls: ['./mentor-courses.component.scss'],
})
export class MentorCoursesComponent {
  constructor(private _matDialog: MatDialog) {}
  cartItems = [
    {
      coursename: 'Angualar Full course',
      price: 4000,
      image: 'https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg',
      Duration: '15.4hr',
      student: 33,
    },
    {
      coursename: 'javascript Advanced',
      price: 5000,
      image: 'https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg',
      Duration: '15.4hr',
      student: 333,
    },
  ];

  openDialog() {
    this._matDialog.open(AddCourseComponent,{minWidth:'50%'});
  }
}
