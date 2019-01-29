import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.pug',
  styleUrls: ['./authorization.component.styl']
})
export class AuthorizationComponent implements OnInit {
  user: User;

  constructor(private chat: ChatService) {
    this.user = new User();

  }

  validUserName(name: string) {
    return name.length > 15;
  }

  createUser() {
    this.chat.connectUser(this.user);
  }

  ngOnInit() {

  }

}
