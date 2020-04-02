import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-hm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() model;
  @Output() callback = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('this.menu => ', this.model)
  }

  OnBack(event) {
    this.callback.emit(event);
  }

  OnNotifications(event) {
    this.callback.emit(event);
  }

  OnSearch(event) {
    this.callback.emit(event);
  }
  
}
