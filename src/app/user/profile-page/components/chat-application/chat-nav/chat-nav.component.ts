import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../../service/chat.service';
import { Subscription } from 'rxjs';
import { getUserDetailsResp } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-chat-nav',
  templateUrl: './chat-nav.component.html',
  styleUrls: ['./chat-nav.component.scss'],
})
export class ChatNavComponent implements OnInit, OnDestroy {
  allUsers!: Array<getUserDetailsResp>;
  allUsersSubscription$!: Subscription;
  constructor(private _chatService: ChatService) {}

  ngOnInit(): void {
    this.allUsersSubscription$ = this._chatService
      .fetchUsers()
      .subscribe((res) => {
        this.allUsers = res;
        console.log(this.allUsers);
      });
  }
  ngOnDestroy(): void {
    this.allUsersSubscription$?.unsubscribe();
  }
}
