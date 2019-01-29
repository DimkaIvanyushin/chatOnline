import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Message } from 'src/app/models/message';
import { User } from 'src/app/models/user';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  messages(): Observable<Message> {
    return new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
    });
  }

  user(): Observable<User> {
    return new Observable(observer => {
      this.socket.on('user', (data) => {
        observer.next(data);
      });
    });
  }

  users(): Observable<User[]> {
    return new Observable(observer => {
      this.socket.on('update user list', (data) => {
        observer.next(data);
      });
    });
  }

  getMessagesChat(): Observable<Message []> {
    return new Observable(observer => {
      this.socket.on('messages', (data) => {
        observer.next(data);
      });
    });
  }

  connectUser(user) {
    this.socket.emit('connect user', user);
  }

  searchMessage(searchMessage) {
    this.socket.emit('search message', searchMessage);
  }

  addFriend(user) {
    this.socket.emit('add friend', user);
  }

  deleteFriend(user) {
    this.socket.emit('delete user', user);
  }

  updateMessage(currentMessage, message) {
    this.socket.emit('update message', {
      currentMessage: currentMessage,
      message: message
    });
  }

  deleteMEssage(message) {
    this.socket.emit('delete message', message);
  }

  sendMessage(msg) {
    this.socket.emit('message', msg);
  }
}
