import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from 'src/app/services/chat/chat.service';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.pug',
  styleUrls: ['./list-messages.component.styl']
})
export class ListMessagesComponent implements OnInit {

  @Input() messages;
  @Output() eventEditMessage = new EventEmitter<Message>();
  @ViewChild('containerMessages') private scrollContainer: ElementRef;


  constructor(private chat: ChatService) {

  }

  showFullMEssage(message) {
    message.fullMessage = !message.fullMessage;
  }

  showIcon(message) {
    return this.chat.user.name === message.name;
  }

  editMessage(message) {
    this.eventEditMessage.emit(message);
  }

  deleteMessage(message) {
    this.chat.deleteMEssage(message);
  }

  scrollToBottom() {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  ngOnInit() {
    this.chat.eventNewMessage().subscribe(message => {
      this.scrollToBottom();
    });
  }

}
