import { Injectable } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket/websocket.service';
import { Observable, Subject } from 'rxjs';
import { Message } from 'src/app/models/message';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  message: Observable<Message>;
  messages: Observable<Message[]>;
  users: Observable<User[]>;
  user: User;

  constructor(private wsService: WebsocketService) {
    this.message = wsService.messages();
    this.messages = wsService.getMessagesChat();
    this.users = wsService.users();

    wsService.user().subscribe(user => {
      this.user = user;
    });

  }

  sendMessage(msg) {
    this.wsService.sendMessage(msg);
  }

  searchMessage(searchText) {
    this.wsService.searchMessage(searchText);
  }

  deleteMEssage(message) {
    this.wsService.deleteMEssage(message);
  }

  updateMessage(currentMessage, message) {
    this.wsService.updateMessage(currentMessage, message);
  }

  addFriend(user) {
    this.user.friends.push(user);
    this.wsService.addFriend(user);
  }

  deleteFriend(user) {
    this.wsService.deleteFriend(user);
  }

  eventNewMessage(): Observable<any> {
    return this.message;
  }

  connectUser(user) {
    this.user = user;
    this.wsService.connectUser(user);
  }

}
