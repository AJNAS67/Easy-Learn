import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomePageService } from '../service/home-page.service';
import { CourseResponse } from 'src/app/interface/user.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  allCourse$!: any;
  trendingCourses$!: Array<CourseResponse>;
  featuredCourses$!: Array<CourseResponse>;
  popularCourses$!: Array<CourseResponse>;
  mL_aiCourses$!: Array<CourseResponse>;

  trendingSubscription!: Subscription;
  featuredSubscription!: Subscription;
  popularSubscription!: Subscription;
  mlSubscription!: Subscription;

  constructor(private _homeService: HomePageService) {}

  ngOnInit(): void {
    this.allCourse$ = this._homeService.getAllCourse();
    this.getTrending();
    this.getFeatured();
    this.getPopulated();
  }

  getTrending() {
    this.trendingSubscription = this._homeService
      .getTrendingCourses()
      .subscribe((res: Array<CourseResponse>) => {
        this.trendingCourses$ = res;
      });
  }
  getFeatured() {
    this.featuredSubscription = this._homeService
      .getFeaturedCourses()
      .subscribe((res) => {
        this.featuredCourses$ = res;
      });
  }
  getPopulated() {
    this.popularSubscription = this._homeService
      .getPopularCourses()
      .subscribe((res) => {
        this.popularCourses$ = res;
      });
  }
  getML_AI() {
    this.mlSubscription = this._homeService.getMLCourses().subscribe((res) => {
      this.mL_aiCourses$ = res;
    });
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
  categories: any = [
    { value: 'Data Science & Business Analytics' },
    { value: 'AI & Machine Learning' },
    { value: 'Cyber Security' },
    { value: 'Cloud Computing' },
    { value: 'Software Development' },
    { value: 'Digital Marketing' },
  ];
  ngOnDestroy(): void {
    this.trendingSubscription.unsubscribe();
    this.featuredSubscription.unsubscribe();
    this.popularSubscription.unsubscribe();
    this.mlSubscription.unsubscribe();
  }
}
