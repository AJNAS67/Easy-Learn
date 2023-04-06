import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomePageService } from '../service/home-page.service';
import { Category, CourseResponse } from 'src/app/interface/user.interface';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
  allCategory!: Array<Category>;

  trendingSubscription!: Subscription;
  featuredSubscription!: Subscription;
  popularSubscription!: Subscription;
  mlSubscription!: Subscription;
  allCategorySubscription!: Subscription;

  constructor(private _homeService: HomePageService,private _router:Router) {}

  ngOnInit(): void {
    this.allCourse$ = this._homeService.getAllCourse();
    this.getTrending();
    this.getFeatured();
    this.getPopulated();
    this.getAllCourseCategory();
    this.getML_AI()
  }
  getAllCourseCategory() {
    this.allCategorySubscription = this._homeService
      .getAllCategory()
      .subscribe((res) => {
        this.allCategory = res;
      });
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

  categoryFilter(_id: string) {
    this._router.navigate(['/filter-category',_id]);
    
  }

  ngOnDestroy(): void {
    this.trendingSubscription.unsubscribe();
    this.featuredSubscription.unsubscribe();
    this.popularSubscription.unsubscribe();
    this.mlSubscription.unsubscribe();
    this.allCategorySubscription.unsubscribe();
  }
}
