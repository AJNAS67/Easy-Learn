import { Component } from '@angular/core';

@Component({
  selector: 'app-mentor-courses',
  templateUrl: './mentor-courses.component.html',
  styleUrls: ['./mentor-courses.component.scss'],
})
export class MentorCoursesComponent {
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
}
