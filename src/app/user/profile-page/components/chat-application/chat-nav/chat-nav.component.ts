import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../../service/chat.service';
import { Subscription } from 'rxjs';
import {
  MessageInterface,
  MessageResp,
  getUserDetailsResp,
} from 'src/app/interface/user.interface';
import { UserService } from '../../../service/user.service';
import { SocketService } from '../../../service/websockets/socket.service';

@Component({
  selector: 'app-chat-nav',
  templateUrl: './chat-nav.component.html',
  styleUrls: ['./chat-nav.component.scss'],
})
export class ChatNavComponent implements OnInit, OnDestroy {
  allUsers!: Array<getUserDetailsResp>;
  allUsersSubscription$!: Subscription;
  userDetailsSubscription$!: Subscription;
  getAllAdminSubscription$!: Subscription;
  user!: getUserDetailsResp;
  allAdmins!: Array<getUserDetailsResp>;
  userId!: string;
  receiver!: getUserDetailsResp;
  getMessages!: Array<MessageResp>;
  constructor(
    private _chatService: ChatService,
    private _userService: UserService,
    private _socketService: SocketService
  ) {}

  ngOnInit(): void {
    this.userDetailsSubscription$ = this._userService
      .getUserDetails()
      .subscribe((res) => {
        this.user = res;
        this.userId = res._id;
      });

    this.allUsersSubscription$ = this._chatService
      .fetchUsers()
      .subscribe((res) => {
        this.allUsers = res;
      });
    this.getAllAdminSubscription$ = this._chatService
      .getAllAdmin()
      .subscribe((res) => {
        this.allAdmins = res;
      });
    this._socketService.getNewMessage().subscribe((res) => {
      this.getMessages.push(res.content);
      console.log(this.getMessages,'getMessages');
      
    });

  }

  sendReceiver(receiver: getUserDetailsResp) {
    this.receiver = receiver;
    this._chatService.getChats(receiver._id).subscribe((res) => {
      this.getMessages = res;
    });
  }
  ngOnDestroy(): void {
    this.allUsersSubscription$?.unsubscribe();
    this.userDetailsSubscription$?.unsubscribe();
    this.getAllAdminSubscription$.unsubscribe();
  }
}
