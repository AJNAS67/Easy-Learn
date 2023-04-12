import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from 'src/app/interface/admin.interface';
import { getUserDetailsResp } from 'src/app/interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private _http: HttpClient) {}
  fetchUsers(): Observable<getUserDetailsResp[]> {
    return this._http.get<getUserDetailsResp[]>(
      'http://localhost:3000/admin/users',
      {}
    );
  }
}
