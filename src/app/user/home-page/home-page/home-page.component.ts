import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {


  array = [
    { name: 'Art & Design' },
    { name: 'Development' },
    { name: 'Lifestyle' },
    { name: 'Personal Development' },
    { name: 'Business' },
    { name: 'Finance' },
    { name: 'Marketing' },
    { name: 'Photography' },
    { name: 'Data Science' },
    { name: 'Health & Fitness' },
    { name: 'Music' },
    { name: 'Teaching & Academics' },
  ];

}
