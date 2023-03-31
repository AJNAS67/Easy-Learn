import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  uploadProfileDetails(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/profile`, data);
  }
  getProfileData() {
    return this.http.get(`${this.baseUrl}/get_user_details`);
  }
  // to upload profile pic
  uploadProfilePick(uploadImage: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/upload`, uploadImage);
  }

  uploadCourseVideo(uploadVideo: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/upload_video`, uploadVideo);
  }

   // to upload video thumbnail
   uploadVideoThumbnail(uploadImage: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/upload_thumbnail`, uploadImage);
  }
  getUserDetails() {
    return this.http.get(`${this.baseUrl}/api/userDetails`);
  }
  uploadCourse(course: any): Observable<any>  {    
    return this.http.post(`${this.baseUrl}/course/add-course`, course);
  }
}