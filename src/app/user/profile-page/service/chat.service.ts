import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageResp, getUserDetailsResp } from 'src/app/interface/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  baseUrl = environment.apiUrl;

  constructor(private _http: HttpClient) {}
  fetchUsers(): Observable<getUserDetailsResp[]> {
    return this._http.get<getUserDetailsResp[]>(`${this.baseUrl}/admin/students`);
  }
  getAllAdmin(): Observable<getUserDetailsResp[]> {
    return this._http.get<getUserDetailsResp[]>(`${this.baseUrl}/api/isAdmin`);
  }
  getChats(receiverId:string){
    return this._http.get<Array<MessageResp>>(`${this.baseUrl}/get_chats/${receiverId}`)
    
  }
}
