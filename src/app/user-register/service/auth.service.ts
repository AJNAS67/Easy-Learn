import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  userLogin,
  userRegister,
} from 'src/app/interface/auth.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginResponse } from 'src/app/interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.apiUrl;

  serviceURL!: string;
  private readonly TOKEN_NAME = 'access_token';

  constructor(private http: HttpClient) {}
  registerUser(
    data: userRegister
  ): Observable<{ message: string; isAdded: boolean }> {
    this.serviceURL = `${this.baseUrl}`;
    return this.http.post<{ message: string; isAdded: boolean }>(
      `${this.baseUrl}/api/register`,
      data
    );
  }
  loginUser(data: userLogin) {
    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/login`, data);
  }

  getToken() {
    return localStorage.getItem(this.TOKEN_NAME);
  }
}
