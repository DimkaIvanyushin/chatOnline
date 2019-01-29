import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-smile-bar',
  templateUrl: './smile-bar.component.pug',
  styleUrls: ['./smile-bar.component.styl']
})
export class SmileBarComponent implements OnInit {

  @Output() eventAddInputSmile = new EventEmitter<object>();
  smiles: object[];

  constructor() {
    this.smiles = [
      { symbol: ':)', text: '<i class="fas fa-smile smile"></i>' },
      { symbol: ';)', text: '<i class="fas fa-smile-wink smile"></i>' },
      { symbol: ':D', text: '<i class="fas fa-grin-alt smile"></i>' },
      { symbol: '|)', text: '<i class="fas fa-smile-beam smile"></i>' },
      { symbol: 'xD', text: '<i class="fas  fa-grin-squint smile"></i>' },
      { symbol: ':(', text: '<i class="fas fa-grin-beam-sweat smile"></i>' },
      { symbol: '0_0', text: '<i class="fas fa-surprise smile"></i>' },
    ];
  }

  addInputSmile(smile) {
    this.eventAddInputSmile.emit(smile);
  }

  ngOnInit() {
  }

}
