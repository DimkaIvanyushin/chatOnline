import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Message } from 'src/app/models/message';
import { User } from 'src/app/models/user';
import { ChatService } from 'src/app/services/chat/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.pug',
  styleUrls: ['./chat.component.styl']
})
export class ChatComponent implements OnInit {

  message: string;
  currentMessage: string;
  messages: Message[];
  user: User;
  users: User[];
  filteredListUsers: User[];
  boolUpdateMessage: boolean;
  showMenu: boolean;

  constructor(
    private router: Router,
    private chat: ChatService
  ) {

    this.message = '';
    this.currentMessage = '';
    this.messages = [];
    this.users = [];
    this.user = this.chat.user;
    this.boolUpdateMessage = false;

    if (!this.user) {
      this.router.navigate(['/']);
    }
  }

  eventUpdateMessages() {
    this.chat.updateMessage(this.currentMessage, new Message(this.user.name, this.message, new Date()));
    this.boolUpdateMessage = false;
    this.message = '';
  }

  eventEditMessage(message) {
    this.currentMessage = message.message;
    this.message = message.message;
    this.boolUpdateMessage = true;
  }

  eventSearchMessageList(searchText) {
    this.chat.searchMessage(searchText);
  }

  eventSearchUserList(userName) {
    this.filteredListUsers = this.filterListUser(userName);
  }

  filterListUser(userName: string) {
    return this.users.filter(user => user.name.indexOf(userName) !== -1);
  }

  eventRepliceMessage(text: string) {
    this.message = text;
  }

  eventAddInputSmile(smile) {
    this.message += ' ' + smile.symbol + ' ';
  }

  eventSendMessages(message: string) {
    this.chat.sendMessage(
      new Message(this.user.name, message, new Date())
    );
    this.message = '';
  }

  ngOnInit() {

    this.chat.message.subscribe(message => {
      this.messages.push(message);
    });

    this.chat.users.subscribe(users => {
      this.users = users;
      this.filteredListUsers = users;
    });

    this.chat.messages.subscribe(messages => {
      this.messages = messages;
    });

    this.filteredListUsers = this.users;
  }

}
