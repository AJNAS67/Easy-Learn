import { Component, Input } from '@angular/core';
import { SocketService } from '../../../service/websockets/socket.service';
import { ChatService } from '../../../service/chat.service';
import {
  MessageResp,
  getUserDetailsResp,
} from 'src/app/interface/user.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  @Input() userId!: string;
  @Input() receiverDetails!: getUserDetailsResp;
  @Input() getMessages!: Array<MessageResp>;
  messages: any;
  constructor(
    private _socketService: SocketService,
  ) {}
  
  newMessage: string | null | undefined;
  sendMessage() {
    this._socketService.sendMessage(
      this.newMessage,
      this.userId,
      this.receiverDetails._id
    );
    this.newMessage = null;
  }
}
