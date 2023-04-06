import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HomePageService } from '../service/home-page.service';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent implements OnInit, OnDestroy {
  categoryIdSubscription!: Subscription;
  categoryFilterSubscription!: Subscription;
  categoryId = '';
  categoryCourse!: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _homeService: HomePageService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.categoryIdSubscription = this._activatedRoute.params.subscribe(
      (params) => {
        this.categoryId = params['categoryId'];
      }
    );
    this.categoryFilterSubscription = this._homeService
      .fetchCategoryCourse(this.categoryId)
      .subscribe((data) => {
        this.categoryCourse = data;
      });
  }
  courseDetails(_id: string) {
    this._router.navigate(['/course-details', _id]);
  }
  ngOnDestroy(): void {
    this.categoryFilterSubscription.unsubscribe();
    this.categoryIdSubscription.unsubscribe();
  }
}
