import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  CourseInterface,
} from 'src/app/interface/admin.interface';
import { AdminService } from './admin.service';

@Injectable()
export class CourseDataSource extends DataSource<CourseInterface> {
  course$ = new BehaviorSubject<CourseInterface[]>([]);

  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private adminService: AdminService) {
    super();
  }
  connect(): Observable<CourseInterface[]> {
    return this.course$.asObservable();
  }

  disconnect(): void {
    this.course$.complete();
  }

  loadCourse(sort: Sort): void {
    this.isLoading$.next(true);
    this.adminService.fetchCourses(sort).subscribe((course) => {
      this.course$.next(course);
      this.isLoading$.next(false);
    });
  }
}
