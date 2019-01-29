import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChatService } from 'src/app/services/chat/chat.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.pug',
  styleUrls: ['./list-users.component.styl']
})
export class ListUsersComponent implements OnInit {

  @Input() users;

  constructor(private chat: ChatService) {

  }

  addFriend(user) {
    this.chat.addFriend(user);
  }

  deleteFriend(user) {
    this.chat.deleteFriend(user);
  }

  showButton(user) {
    user.showButton = !user.showButton;
  }

  checkName(user) {
    return user.name === this.chat.user.name;
  }

  checkUserFriend(user) {
    user.checkFriend = this.chat.user.friends.some(e => {
      return e.name === user.name;
    });
  }

  ngOnInit() {

  }

}
