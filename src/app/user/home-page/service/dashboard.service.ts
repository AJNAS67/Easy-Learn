import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  baseUrl = environment.apiUrl;

  constructor(private _http: HttpClient) {}
  getNumberOfUsers(): Observable<number> {
    return this._http.get<number>(`${this.baseUrl}/api/get_numberOf_User`);
  }
  getNumberOfMentor(): Observable<number> {
    return this._http.get<number>(`${this.baseUrl}/api/get_numberOf_mentor`);
  }
  getTotalPrice(): Observable<number> {
    return this._http.get<number>(`${this.baseUrl}/enrolled-course/get_total`);
  }
  numberOfCourse(): Observable<number> {
    return this._http.get<number>(`${this.baseUrl}/course/total_course`);
  }
}
