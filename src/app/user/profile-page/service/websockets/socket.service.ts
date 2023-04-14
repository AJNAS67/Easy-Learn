import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { MessageInterface, chatResponse } from 'src/app/interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(private _socket: Socket) {}

  // emit event
  // emitMessage() {
  //   this._socket.emit('fetchMovies');
  // }

  sendMessage(message: string |undefined |null, senderId: string, receiverId: string): void {
    console.log(message, 'message');

    return this._socket.emit('sendMessage', { message, senderId, receiverId });
  }
  getNewMessage(): Observable<chatResponse> {
    return this._socket.fromEvent<chatResponse>('receiveMessage');
  }

  // listen event
  onFetchMessage() {
    return this._socket.fromEvent('receiveMessage');
  }
}
