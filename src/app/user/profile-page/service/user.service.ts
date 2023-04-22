import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  cartResponse,
  wishlistResponse,
  CourseResponse,
  DeleteResponse,
  getUserDetailsResp,
  EnrolledCourse,
  imageUploadResponse,
  profileUpdate,
  VideoUploadResponse,
  OrderResponse,
} from 'src/app/interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.apiUrl;
  private _refreshRequired = new Subject<void>();
  get RequiredRefresh() {
    return this._refreshRequired;
  }
  constructor(private http: HttpClient) {}

  uploadProfileDetails(data: profileUpdate): Observable<profileUpdate> {
    return this.http.post<profileUpdate>(`${this.baseUrl}/profile`, data);
  }
  getProfileData() {
    return this.http.get<Array<profileUpdate>>(
      `${this.baseUrl}/get_user_details`
    );
  }

  editCourse(course: CourseResponse,courseId:string): Observable<any> {
    return this.http.put(`${this.baseUrl}/course/edit-course/${courseId}`, course).pipe(
      tap(() => {
        this.RequiredRefresh.next();
      })
    );
  }

  // editCourse(course: CourseResponse): Observable<any> {
  //   return this.http.put(`${this.baseUrl}/course/edit-course`, course).pipe(
  //     tap(() => {
  //       this.RequiredRefresh.next();
  //     })
  //   );
  // }
  // to upload profile pic
  uploadProfilePick(uploadImage: FormData): Observable<imageUploadResponse> {
    return this.http.post<imageUploadResponse>(
      `${this.baseUrl}/upload`,
      uploadImage
    );
  }
  // to upload course thumbnail
  uploadThumbnail(uploadImage: FormData): Observable<imageUploadResponse> {
    return this.http.post<imageUploadResponse>(
      `${this.baseUrl}/upload_thumbnail`,
      uploadImage
    );
  }

  uploadCourseVideo(uploadVideo: FormData): Observable<VideoUploadResponse> {
    return this.http.post<VideoUploadResponse>(
      `${this.baseUrl}/upload_video`,
      uploadVideo
    );
  }

  getUserDetails(): Observable<getUserDetailsResp> {
    return this.http.get<getUserDetailsResp>(`${this.baseUrl}/api/userDetails`);
  }

  uploadCourse(course: CourseResponse): Observable<any> {
    return this.http.post(`${this.baseUrl}/course/add-course`, course).pipe(
      tap(() => {
        this.RequiredRefresh.next();
      })
    );
  }
  deleteCourse(courseId: string) {
    return this.http.delete<DeleteResponse>(
      `${this.baseUrl}/course/deleteCourse/${courseId}`
    );
  }
  getMentorCourse() {
    return this.http.get<Array<CourseResponse>>(
      `${this.baseUrl}/course/mentor_course`
    );
  }
  getEnrolledCourses() {
    return this.http.get<any>(
      `${this.baseUrl}/enrolled-course/get_enrolled_course`
    );
  }

  getCartItems() {
    return this.http.get<cartResponse>(`${this.baseUrl}/cart/userCart`);
  }
  getWishlistItems(): Observable<wishlistResponse> {
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
  checkout(order: cartResponse) {
    return this.http.post<OrderResponse>(
      `${this.baseUrl}/enrolled-course/subscribeCourse`,
      order
    );
  }
  updateProfileDetails(userDetails: profileUpdate) {
    console.log(userDetails,'userPr');
    
    return this.http.put(`${this.baseUrl}/update_profile`, userDetails);
  }
}
