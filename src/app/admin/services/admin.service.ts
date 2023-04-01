import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { CourseInterface, UserInterface } from 'src/app/interface/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }



  fetchUsers(sort: Sort): Observable<UserInterface[]> {
    const params = new HttpParams()
      .set('_sort', sort.active)
      .set('_order', sort.direction);
    return this.http.get<UserInterface[]>('http://localhost:3000/admin/users', {
      params,
    });
  }
  fetchCourses(sort: Sort): Observable<CourseInterface[]> {
    const params = new HttpParams()
      .set('_sort', sort.active)
      .set('_order', sort.direction);
    return this.http.get<CourseInterface[]>('http://localhost:3000/admin/courses', {
      params,
    });
  }

}
