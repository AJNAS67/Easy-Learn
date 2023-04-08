import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HomePageService } from '../service/home-page.service';
import {
  AddToCartResponse,
  CourseResponse,
} from 'src/app/interface/user.interface';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  courseIdSubscription!: Subscription;
  courseDetailsFetchSubscription!: Subscription;
  courseId = '';
  course!: CourseResponse;
  video!: string;

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
        this.video = data?.VideoModule[0]?.video;
      });
  }

  popUpMessage(message: string) {
    this._snackBar.open(`${message}`, 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  addToWishlist() {
    this._homeService
      .addToWishlist(this.course._id)
      .subscribe((res: AddToCartResponse) => {
        this.popUpMessage(res.message);
      });
  }
  addToCart() {
    this._homeService
      .addToCart(this.course._id)
      .subscribe((res: AddToCartResponse) => {
        this.popUpMessage(res.message);
      });
  }
  ngOnDestroy(): void {
    this.courseIdSubscription.unsubscribe();
    this.courseDetailsFetchSubscription.unsubscribe();
  }
}
