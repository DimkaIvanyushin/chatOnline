import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.component.pug',
  styleUrls: ['./input-message.component.styl']
})
export class InputMessageComponent implements OnInit {

  @Output() eventSendMessages = new EventEmitter<string>();
  @Output() eventUpdateMessages = new EventEmitter<String>();
  @Output() eventRepliceMessage = new EventEmitter<string>();

  @Input() message: string;
  @Input() boolUpdateMessage: boolean;

  @ViewChild('search') searchInput: ElementRef;

  constructor() {

  }

  textChange(value: string) {
    this.message = value;
    this.eventRepliceMessage.emit(value);
  }

  updateMessages() {
      this.eventUpdateMessages.emit(this.message);
  }

  sendMessages() {
    this.eventSendMessages.emit(this.message);
    try {
      this.searchInput.nativeElement.focus();
    } catch (e) { }
  }

  ngOnInit() {

  }

}
