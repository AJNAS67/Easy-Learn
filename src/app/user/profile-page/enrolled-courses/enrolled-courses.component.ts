import { Component } from '@angular/core';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.scss']
})
export class EnrolledCoursesComponent {


  cartItem = [
    {
      coursename: 'Angualar Full course',
      price: 4000,
      mentor: 'Jhon cina',
      image: 'https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg',
      Duration: '15.4hr',
    },
    {
      coursename: 'javascript Advanced',
      price: 5000,
      mentor: 'Jhon cina',
      image: 'https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg',
      Duration: '15.4hr',
    },
    {
      coursename: 'Machine learning',
      price: 15000,
      mentor: 'Jhon cina',
      image: 'https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg',
      Duration: '15.4hr',
    },
  ];


}
