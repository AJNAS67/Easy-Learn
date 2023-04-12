import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../../service/chat.service';
import { Subscription } from 'rxjs';
import { getUserDetailsResp } from 'src/app/interface/user.interface';
import { UserService } from '../../../service/user.service';

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
  constructor(
    private _chatService: ChatService,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this.userDetailsSubscription$ = this._userService
      .getUserDetails()
      .subscribe((res) => {
        this.user = res;
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
  }
  ngOnDestroy(): void {
    this.allUsersSubscription$?.unsubscribe();
    this.userDetailsSubscription$?.unsubscribe();
    this.getAllAdminSubscription$.unsubscribe();
  }
}
