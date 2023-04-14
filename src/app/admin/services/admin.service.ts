import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import {
  CourseInterface,
  UserInterface,
} from 'src/app/interface/admin.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  fetchUsers(sort: Sort): Observable<UserInterface[]> {
    const params = new HttpParams()
      .set('_sort', sort.active)
      .set('_order', sort.direction);
    return this.http.get<UserInterface[]>(`${this.baseUrl}/admin/users`, {
      params,
    });
  }
  fetchCourses(sort: Sort): Observable<CourseInterface[]> {
    const params = new HttpParams()
      .set('_sort', sort.active)
      .set('_order', sort.direction);
    return this.http.get<CourseInterface[]>(`${this.baseUrl}/admin/courses`, {
      params,
    });
  }
  changeAdminStatus(isAdmin: boolean, userId: string) {
    return this.http.patch(
      `${this.baseUrl}/admin/changeAdminStatus/${userId}`,
      { isAdmin: isAdmin }
    );
  }
  changeBlockStatus(isBlock: boolean, userId: string) {
    return this.http.patch(
      `${this.baseUrl}/admin/changeBlockStatus/${userId}`,
      isBlock
    );
  }
}
