import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../service/home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  allCourse$: any;
  constructor(private _homeService: HomePageService) {}
  ngOnInit(): void {
    this.allCourse$ = this._homeService.getAllCourse();
  }

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
