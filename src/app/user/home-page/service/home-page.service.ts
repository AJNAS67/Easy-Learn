import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AddToCartResponse, Category, CourseResponse } from 'src/app/interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  // getAllCourse
  getAllCourse() {
    return this.http.get<Array<CourseResponse>>(
      `${this.baseUrl}/course/getCourses`
    );
  }

  getTrendingCourses() {
    return this.http.get<Array<CourseResponse>>(
      `${this.baseUrl}/course/trending_courses`
    );
  }

  getPopularCourses() {
    return this.http.get<Array<CourseResponse>>(
      `${this.baseUrl}/course/popular_courses`
    );
  }
  getFeaturedCourses() {
    return this.http.get<Array<CourseResponse>>(
      `${this.baseUrl}/course/featured_courses`
    );
  }

  getMLCourses() {
    return this.http.get<Array<CourseResponse>>(
      `${this.baseUrl}/course/ml_courses`
    );
  }
  fetchCategoryCourse(id: string) {
    return this.http.get<Array<CourseResponse>>(`${this.baseUrl}/course/category_course/${id}`);
  }

  getAllCategory() {
    return this.http.get<Array<Category>>(
      `${this.baseUrl}/category/all_category`
    );
  }
  fetchCourseDetails(id: string) {
    return this.http.get<CourseResponse>(`${this.baseUrl}/course/course/${id}`);
  }
  addToCart(courseId: string) {
    return this.http.post<AddToCartResponse>(`${this.baseUrl}/cart/addToCart`, {
      courseId: courseId,
    });
  }
  addToWishlist(courseId: string) {
    return this.http.post<AddToCartResponse>(`${this.baseUrl}/wishlist/addToWishlist`, {
      courseId: courseId,
    });
  }
}
