import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  cartResponse,
  wishlistResponse,
  CourseResponse,
  DeleteResponse,
  getUserDetailsResp,
} from 'src/app/interface/user.interface';

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
  // to upload course thumbnail
  uploadThumbnail(uploadImage: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/upload_thumbnail`, uploadImage);
  }

  uploadCourseVideo(uploadVideo: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/upload_video`, uploadVideo);
  }

  // to upload video thumbnail
  uploadVideoThumbnail(uploadImage: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/upload_thumbnail`, uploadImage);
  }
  getUserDetails() {
    return this.http.get<getUserDetailsResp>(`${this.baseUrl}/api/userDetails`);
  }

  uploadCourse(course: CourseResponse): Observable<any> {
    return this.http.post(`${this.baseUrl}/course/add-course`, course);
  }
  deleteCourse(courseId: string) {
    return this.http.delete<DeleteResponse>(
      `${this.baseUrl}/course/deleteCourse/${courseId}`
    );
  }
  getMentorCourse() {
    return this.http.get<CourseResponse>(
      `${this.baseUrl}/course/mentor_course`
    );
  }

  getCartItems() {
    return this.http.get<cartResponse>(`${this.baseUrl}/cart/userCart`);
  }
  getWishlistItems() {
    return this.http.get<wishlistResponse>(
      `${this.baseUrl}/wishlist/userWishlist`
    );
  }
  removeFromWishlist(id: string) {
    return this.http.delete(
      `${this.baseUrl}/wishlist/removeFromWishlist/${id}`
    );
  }
  removeFromCart(id: string) {
    return this.http.delete(`${this.baseUrl}/cart/removeFromCart/${id}`);
  }
}
