import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userLogin, userRegister,adminLogin } from 'src/app/interface/auth.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  serviceURL!: string;
  private readonly TOKEN_NAME = 'access_token';


  constructor(private http: HttpClient) {}
  registerUser(
    data: userRegister
  ): Observable<{ message: string; isAdded: boolean }> {
    console.log(data, 'datafrom service');
    this.serviceURL = 'http://localhost:3000/api';

    return this.http.post<{ message: string; isAdded: boolean }>(
      `${this.serviceURL}/register`,
      data
    );
  }
  loginUser(data: userLogin): Observable<any> {
    console.log(data, 'logindata');

    return this.http.post<{ message: string; status: boolean }>(
      `${this.serviceURL}/login`,
      data
    );
  }
  loginAdmin(data: adminLogin): Observable<any> {
    console.log(data, 'logindata');

    return this.http.post<{ message: string; status: boolean }>(
      `${this.serviceURL}/admin-login`,
      data
    );
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_NAME);
  }
  check() :Observable<any>{
    this.serviceURL = 'http://localhost:3000/protected';

    return this.http.get<any>(`${this.serviceURL}`);
  }
}
