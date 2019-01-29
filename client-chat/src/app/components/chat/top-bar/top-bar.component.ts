import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.pug',
  styleUrls: ['./top-bar.component.styl']
})
export class TopBarComponent implements OnInit {

  private _searchText: string;

  @Input() user: User;
  @Output() eventSearchMessageList = new EventEmitter<string>();

  get searchMessageText(): string {
    return this._searchText;
  }

  set searchMessageText(searchText: string) {
    this.eventSearchMessageList.emit(searchText);
    this._searchText = searchText;
  }

  constructor() {
    this. _searchText = '';
  }

  ngOnInit() {
  }

}
