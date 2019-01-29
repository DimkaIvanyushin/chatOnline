import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.pug',
  styleUrls: ['./search-user.component.styl']
})
export class SearchUserComponent implements OnInit {

  private _searchText: string;

  @Output() eventSearchUserList = new EventEmitter<string>();

  get searchUserText(): string {
    return this._searchText;
  }

  set searchUserText(searchText: string) {
    this.eventSearchUserList.emit(searchText);
    this._searchText = searchText;
  }

  constructor() { }

  ngOnInit() {
  }

}
