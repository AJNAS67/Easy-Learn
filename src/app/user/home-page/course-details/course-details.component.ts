import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HomePageService } from '../service/home-page.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  courseIdSubscription!: Subscription;
  courseDetailsFetchSubscription!: Subscription;
  courseId = '';
  course!: any;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _snackBar: MatSnackBar,
    private _activatedRoute: ActivatedRoute,
    private _homeService: HomePageService
  ) {}
  ngOnInit() {

    this.courseIdSubscription = this._activatedRoute.params.subscribe(
      (params) => {
        this.courseId = params['courseId'];
      }
    );
    this.courseDetailsFetchSubscription = this._homeService
      .fetchCourseDetails(this.courseId)
      .subscribe((data) => {
        this.course = data;
      });
  }

  addToWishlist() {
    this._snackBar.open('Course Added to wishlist!!', 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  addToCart() {
    this._snackBar.open('Course Added to Cart!!', 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
